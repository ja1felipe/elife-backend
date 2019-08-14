const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./controllers/newsRegister')(app)
require('./controllers/newsList')(app)
require('./controllers/newsEdit')(app)
require('./controllers/newsDelete')(app)

app.listen(3000, () => {
    console.log('Server is listening on port: 3000')
})