const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')

//app
const app = express
app.use(cors())
app.use(bodyparser.json())
app.use(cookieparser())
app.use('/Pages',express.static(__dirname+'/Pages'))

//database
const Database = require('./Database')

app.listen(8081, () => {
    console.log('servidor rodando')
})