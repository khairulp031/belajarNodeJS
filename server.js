const express = require('express')
const app = express()
const module2 = require('./test/module2')
const path = require('path')

app.use(express.json({
    limit: '3mb'
}))
app.use(express.urlencoded({
    limit: '3mb'
}))

app.use(express.static(path.join(__dirname,'./public')))

app.get('/hello', function (req, res) {
    res.send('Hello World')
})

app.use('/test', module2)



app.listen(3000)