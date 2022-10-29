const app = require('./app')
require('dotenv').config()
const colors = require('colors')


app.listen(process.env.RUNNING_PORT, function () {
  console.log('This is from env ' + process.env.RUNNING_PORT)
})
