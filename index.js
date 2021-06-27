require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const authRoute = require('./routes/auth')

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser:true, useUnifiedTopology:true}, () => {
    console.log('connected to DB')
})


const PORT = process.env.PORT || 3000

//middleware 
app.use(express.json())

//route middleware
app.use('/api/auth', authRoute)

app.listen(PORT, () => { console.log('Server running on http://localhost:' + PORT) })