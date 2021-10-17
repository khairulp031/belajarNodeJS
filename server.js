const express = require('express')
const app = express()
const module2 = require('./test/module2')
const path = require('path')
const compression = require('compression')
const cookieParser = require('cookie-parser')

app.use(compression())
app.use(express.json({
    limit: '10mb'
}))
app.use(express.urlencoded({
    limit: '10mb'
}))
app.use(cookieParser())

app.use(express.static(path.join(__dirname,'./public')))

app.get('/hello', function (req, res) {
    res.send('Hello World')
})

app.use('/test', module2)



app.listen(3000)