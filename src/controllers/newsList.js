const express = require('express')
const News = require('../models/News')
const router = express.Router()

router.get('/list', async (req,res) => {
    const lista = await News.find()
    return res.send({lista})
})

module.exports = (app) => app.use('/controller', router)