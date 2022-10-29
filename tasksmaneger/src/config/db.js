const mongoose = require('mongoose')
require('dotenv').config()  

const connetedDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {})
    console.log(`MONGODB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
  }
}

module.exports = connetedDB
