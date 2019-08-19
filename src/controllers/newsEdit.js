const express = require('express')
const News = require('../models/News')
const router = express.Router()
const authMiddleWare = require('../middlewares/auth')

router.put('/:id', authMiddleWare, async (req, res) => {
    const update = req.body
    await News.findByIdAndUpdate(req.params.id, update)
    const updated = await News.findById(req.params.id)
    return res.send({ updated })
})

module.exports = (app) => app.use('/news', router)