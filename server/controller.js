module.exports = {
    registerNewUser: (req, res, next) => {
        const dbInstance = req.app.get('db')

        const{username, password} = req.body
        dbInstance.registerUser(username, password)
        .then(()=>res.status(200))
        .send(res.data)
        .catch(()=>res.status(500).send("You Broke It"))
    },

    getUsers: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getUsers().then(users => {res.status(200).send(users)})
        .catch(err => console.log(err).res.status(500).send(err))
    }
}