const express = require('express')
const addMessage = require('../controllers/addMessage')
const getMessage = require('../controllers/getMessage')
const rourter = express.Router()


rourter.post('/add', addMessage)
rourter.get('/get', getMessage)

module.exports = addMessage