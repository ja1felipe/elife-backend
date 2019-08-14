const express = require('express')
const News = require('../models/News')
const router = express.Router()

router.post('/register', async (req, res) => {
    try{
        const news = await News.create(req.body)
        return res.send({ news })
    }catch(err){
        return res.status(400).send({Error : 'Registration failed'})
    }
})

module.exports = (app) => app.use('/controller', router)