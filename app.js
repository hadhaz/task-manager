const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const connectDB = require('./db/connect')
const task = require('./routes/Task')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`success & server is running on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
app.use(express.json())

app.use(express.static('./public'))
app.use('/api/v1/tasks', task)
