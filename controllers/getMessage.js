const Message = require('../models/Message')


const getMessage = async (req, res, next) => {
    try {
        const findedMessage = await Message.find()
        res.status(200).json({ message2: 'success', message: findedMessage })


    } catch (error) {
        next(error)
    }

}

module.exports = getMessage