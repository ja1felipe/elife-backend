const express = require('express')
const News = require('../models/News')
const router = express.Router()
const authMiddleWare = require('../middlewares/auth')

router.delete('/delete/:id', authMiddleWare, async (req, res) =>{
    const removed = await News.findByIdAndDelete(req.params.id)
    return res.send({removed})
})

module.exports = (app) => app.use('/controller', router)