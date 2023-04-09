const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
const path = require("path")

mongoose.set('strictQuery', true)

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb+srv://ebonitasha:Purplekisses2@cluster88.gfnymjn.mongodb.net/?retryWrites=true&w=majority',
  
  () => console.log('Connected to the DB')
)

// app.use('/class', require('./routes/classesRouter.js'))
app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: "love", algorithms: ['HS256'] })) // req.user
app.use('/api/classSetup', require('./routes/classesRouter.js'))
app.use('/api/addComment', require('./routes/addcommentRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(4000, () => {
  console.log(`Server is running on local port 4000`)
})