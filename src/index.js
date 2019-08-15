const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json(), function (req, res, next) {
    res.header("Allow", "OPTIONS, GET, POST")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.header("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()

})

require('./controllers/newsRegister')(app)
require('./controllers/newsList')(app)
require('./controllers/newsEdit')(app)
require('./controllers/newsDelete')(app)

app.listen(3000, () => {
    console.log('Server is listening on port: 3000')
})