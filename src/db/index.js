const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/elifebd', {useNewUrlParser : true, useFindAndModify : false})

mongoose.Promise = global.Promise

module.exports = mongoose