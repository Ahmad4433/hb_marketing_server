const Message = require('../models/Message')


const getMessage = async (req, res, next) => {
    try {
        const findedMessage = await Message.find().sort({ _id: -1 })
        res.status(200).json({ message2: 'success', message: findedMessage[0] })


    } catch (error) {
        next(error)
    }

}

module.exports = getMessage