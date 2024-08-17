const Message = require('../models/Message')

const addMessage = async (req, res, next) => {
    const { message } = req.body

    try {

        const findedMessage = await Message.find()

        if (findedMessage.length > 0) {
            findedMessage.message = message
            await findedMessage.save()
        } else {
            const newMessage = new Message({
                message
            })
            await newMessage.save()
        }

        res.status(200).json({ message: 'message added successfully', status: true })

    } catch (error) {
        next(error)
    }



}

module.exports = addMessage