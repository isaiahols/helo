// main import section
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

// other declarations 
const app = express();

const {
    SERVER_PORT,
    SECRET,
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
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))



// endpoint section

// app.get('/api/testing', async (req,res)=>{
//     let houses = await req.app.get('db').test_houses()
//     console.log(houses);
    
// })




// Shhhhh, we are listening here

app.listen(SERVER_PORT, () => {
    console.log(`here we are on ${SERVER_PORT}`)
})