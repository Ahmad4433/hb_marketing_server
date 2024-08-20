require('dotenv').config()
const express = require('express')
const cors = require('cors')
const messageRoute = require('./routes/message')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const getConnection = () => {

    try {

        mongoose.connect(process.env.MONGO_URI).then((connection) => {
            console.log('db is connected')
        }).catch((error) => {

            if (error) {
                onsole.log('faild to connect to dn')
            }

        })




    } catch (error) {
        console.log('faild to connect to db')
    }

}


getConnection()

app.use('/message', messageRoute)


app.use((error, req, res, next) => {
    res.send(error.message)
})

app.listen(process.env.PORT, () => console.log('server is running '+process.env.PORT))