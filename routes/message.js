const express = require('express')
const addMessage = require('../controllers/addMessage')
const getMessage = require('../controllers/getMessage')
const getNumber = require('./getNum')
const rourter = express.Router()


rourter.post('/add', addMessage)
rourter.get('/get', getMessage)
rourter.get('/list', getNumber)

module.exports = rourter