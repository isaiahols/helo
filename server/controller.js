module.exports = {
    registerUser: async (req, res) => {
        const { username, password } = req.body
        let db = req.app.get('db');
        let photo = `https://robohash.org/${username}.png`
        req.session.user = {}
        // first see if they exist 
        let userInfo = await db.find_user([username, password])

        if (userInfo[0]) {
            // id exists add to session and redirect
            req.session.user = userInfo[0]
            res.status(200).send(req.session.user);

        } else {
            // if user does not exist add new user
            let newUser = await db.register_user([username, password, photo]);

            req.session.user = newUser[0]
            res.status(200).send(req.session.user)
        }

    },

    loginUser: async (req, res) => {
        const { username, password } = req.body
        let db = req.app.get('db');
        req.session.user = {}

        // check database for username and password
        let userInfo = await db.find_user([username, password])

        // check if user exists
        if (userInfo[0]) {
            // id exists add to session and redirect
            req.session.user = userInfo[0]
            res.status(200).send(req.session.user)

        } else {
            // if user does not exist say "wrong username or password"
            res.status(401).send('wrong username or password')
        }
    },
    userData: (req, res) => {
        // checking if user is signed in
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(200).send('nope');
        }
    },
    getAllPosts: async (req, res) => {
        let db = req.app.get('db');

        let allPosts = await db.get_all_posts();
        res.status(200).send(allPosts)
    },
    addNewPost: async (req, res) => {
        const { title, img, content } = req.body
        const { userId } = req.params
        let db = req.app.get('db');

        let post = await db.make_new_post([title, img, content, userId]);
        res.status(200).send(post)

    },
    getOnePost: async (req, res) => {
        const { id } = req.query

        let db = req.app.get('db');

        let post = await db.get_one_post([id]);
        res.status(200).send(post)
    }

}