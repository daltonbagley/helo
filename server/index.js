const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const cors = require('cors')
const massive = require('massive')
require('dotenv').config()


const app = express()
app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

app.post('/api/users', controller.registerNewUser)
app.get('/api/users', controller.getUsers)

app.listen(3001, ()=>{console.log('Server is running on port 3001')})