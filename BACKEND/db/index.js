require("dotenv").config();
const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(res =>{
        console.log('Database connected...')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db