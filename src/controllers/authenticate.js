const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const Password = require('../models/Password')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = process.env.secret

router.post('/auth', async (req,res) => {
    const { admin } = req.body
    const { password } = req.body
    const login = await Password.findOne({admin}).select('+password')
    if(!login){
        return res.status(400).send({error : "Invalid token"})
    }
    if(!await bcrypt.compare(password, login.password)){
        return res.status(400).send({error : "Invalid token"})
    }
    login.password = undefined

    const token = jwt.sign({ id: login.id }, secret, {
        expiresIn: 86400
    })

    res.send({login, token})
})

module.exports = (app) => app.use('/news', router)