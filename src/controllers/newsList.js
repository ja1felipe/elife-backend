const express = require('express')
const News = require('../models/News')
const router = express.Router()
const authMiddleWare = require('../middlewares/auth')

router.get('/', authMiddleWare, async (req,res) => {
    const lista = await News.find()
    return res.send(lista)
})

router.get('/:theme', async (req,res) => {
    const item = await News.find({theme : req.params.theme})
    return res.send(item)
})

router.get('/:id', async (req,res) => {
    const item = await News.findById(req.params.id)
    console.log(item)
    return res.send(item)
})

module.exports = (app) => app.use('/news', router)