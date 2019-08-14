const express = require('express')
const News = require('../models/News')
const router = express.Router()

router.put('/edit/:id', async (req, res) => {
    const update = req.body
    await News.findByIdAndUpdate(req.params.id, update)
    const updated = await News.findById(req.params.id)
    return res.send({ updated })
})

module.exports = (app) => app.use('/controller', router)