const express = require('express')
const News = require('../models/News')
const router = express.Router()
const authMiddleWare = require('../middlewares/auth')

router.get('/list', authMiddleWare, async (req,res) => {
    const lista = await News.find()
    return res.send(lista)
})

router.get('/list/:theme', async (req,res) => {
    const item = await News.find({theme : req.params.theme})
    return res.send(item)
})

router.get('/list/:id', async (req,res) => {
    const item = await News.findById(req.params.id)
    return res.send(item)
})

module.exports = (app) => app.use('/controller', router)