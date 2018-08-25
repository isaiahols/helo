// main import section
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const con = require('./controller')

// other declarations 
const app = express();

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});




// middleware section

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))



// endpoint section

// app.get('/api/testing', async (req,res)=>{
//     let houses = await req.app.get('db').test_houses()
//     console.log(houses);

// })

app.get('/api/session',(req,res)=>{
    console.log(req.session);
    res.send(req.session.user);
})


app.post('/api/auth/register', con.registerUser);
app.post('/api/auth/login', con.loginUser);
app.get('/api/user-data', con.userData);

app.get('/api/posts', con.getAllPosts);
app.post('/api/posts/add/:userId', con.addNewPost);
app.get('/api/posts/one', con.getOnePost);

app.get('/auth/unauthorized', (req,res)=>{
    res.redirect('http://localhost:3000/')
})
app.get('/auth/logout', (req, res) => {
    // wipes the session for user
    req.session.destroy()
    res.redirect('http://localhost:3000/#/')
})



// Shhhhh, we are listening here

app.listen(SERVER_PORT, () => {
    console.log(`here we are on ${SERVER_PORT}`)
})