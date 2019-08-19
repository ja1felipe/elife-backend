const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL, {useNewUrlParser : true, useFindAndModify : false}).then(
    console.log("Database Connect")
)

mongoose.Promise = global.Promise

module.exports = mongoose