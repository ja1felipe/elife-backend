const mongoose = require('../db/index')

const NewsSchema = new mongoose.Schema({
    linkImg:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const News = mongoose.model('News', NewsSchema)

module.exports = News