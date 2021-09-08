const express = require('express')
const morgan = require('morgan')
const signupRouter = require('./routes/signup')

const app = express()
const PORT = process.env.PORT || 3000

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// view engine - IGNORED FOR TODAY

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
