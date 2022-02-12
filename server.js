const express = require('express')
const app = express()

const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//parse request to body parser
app.use(bodyparser.urlencoded({extended: true}))

//set view enigne
app.set("view engine","ejs")
//app.set("views", path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//require routers
app.use('/',require('./server/routes/router'))

//console display
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
