require('dotenv').config
const express = require('express')
const morgan = require('morgan')
const signupRouter = require('./routes/signup')

const app = express()
const PORT = process.env.PORT || 3000

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
console.log(process.env.PORT)

// view engine - IGNORED FOR TODAY

// route middleware
app.use('/signup', signupRouoter)
app.get('login', (req, res) => {
    res.send(req.query.message)
})

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
