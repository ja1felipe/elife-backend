const express = require('express')
const News = require('../models/News')
const router = express.Router()

router.delete('/delete/:id', async (req, res) =>{
    const removed = await News.findByIdAndDelete(req.params.id)
    return res.send({removed})
})

module.exports = (app) => app.use('/controller', router)