const mongoose = require('mongoose')


const numberSchea = new mongoose.Schema({
    list: []
}, { timestamps: true })



module.exports = mongoose.model('Numbers', numberSchea)