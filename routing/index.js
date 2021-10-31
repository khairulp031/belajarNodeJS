const express = require('express')
const router = express.Router()




router.use('/', function (req, res) {
    res.send('verifyToken')
})

module.exports = router