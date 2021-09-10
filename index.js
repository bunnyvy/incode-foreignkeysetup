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

// Session config
app.use(session({
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    },
    name: 'mrcoffee_sid',
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET
  }))

// app.use(session)
  
// route middleware
app.use('/signup', signupRouoter)
app.get('login', (req, res) => {
    res.send(req.query.message)
})

// myGov login is a good example of a very short maxAge? if you browse around it kiks you out and you have to login again

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))
