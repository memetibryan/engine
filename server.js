const express = require('express')
const app = express()

const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan(tiny));

app.get('/', (req, res) => res.send('Engine Application'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
