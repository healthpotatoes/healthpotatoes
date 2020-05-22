const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/keys')

const app = express()

// BodyParser
app.use(express.json())

// DB Config
const db = config.mongoURI

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(console.log('MongoDB connected.'))
.catch(err => console.log(err))

// Test Route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))
