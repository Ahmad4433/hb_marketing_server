const Numbers = require('../models/Numbers')
const Page = require('../models/page')

const getNumber = async (req, res, next) => {





    try {
        let newArray = [];
        let count;
        const page = await Page.find().countDocuments();

        if (page === 0) {
            count = 1
        } else {
            count = page
        }
        const limit = 50;
        const list2 = await Numbers.find()
        list2.map((item) => {
            return item.list.map((item2) => {
                return newArray.push(item2)
            })
        }).flat()


        const formatedPagination = newArray.slice((count - 1) * limit, count * limit)
     

        const newPage = new Page({
            page: 1
        })

        await newPage.save()
        res.status(200).json({ message: 'success', status: true, list: formatedPagination })
    } catch (error) {
        next(error)
    }




}

module.exports = getNumber




