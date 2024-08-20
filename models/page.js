const mongoose = require('mongoose')


const pageScheam = new mongoose.Schema({

    page: { type: Number, default: 1 }

}, { timestamps: true })


module.exports = mongoose.model('Page', pageScheam)