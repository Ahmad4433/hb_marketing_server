const Numbers = require('../models/Numbers')
const Page = require('../models/page')

const getNumber = async (req, res, next) => {





    try {
        let count;
        const page = await Page.find().countDocuments();
        if (page === 0) {
            count = 1
        } else {
            count = page
        }
        const limit = 50;
        const list = await Numbers.find().skip((count -1)  *limit).limit(limit)

        const newPage = new Page({
            page: 1
        })

        await newPage.save()
        res.status(200).json({ message: 'success', status: true, list })
    } catch (error) {
        next(error)
    }




}

module.exports = getNumber