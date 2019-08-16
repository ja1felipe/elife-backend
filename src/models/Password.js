const mongoose = require('../db/index')
const bcrypt = require('bcryptjs')

const PasswordSchema = new mongoose.Schema({
    admin:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false
    }
})

PasswordSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})


const Password = mongoose.model('Password', PasswordSchema)

module.exports = Password