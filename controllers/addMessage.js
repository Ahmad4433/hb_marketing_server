const Message = require('../models/Message')

const addMessage = async (req, res, next) => {
    const { message } = req.body

    try {

        const newMessage = new Message({
            message: message
        })
        await newMessage.save()
        res.status(200).json({ message: 'message added successfully', status: true })

    } catch (error) {
        next(error)
    }



}

module.exports = addMessage