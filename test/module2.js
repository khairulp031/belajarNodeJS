const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

function noCache(req, res, next) {
    console.log('noCache')
    res.set('Cache-control', `no-cache, no-store`)
    next() // pass control to the next handler
}
router.all('/', function (req, res, next) {
    res.set('Cache-control', `no-cache, no-store`)
    const token = jwt.sign({ user: 'test123' }, 'asdljfhwoeurwkehfadfadsf');
    res.set('x-jwt', token)
    next() // pass control to the next handler
})
router.get('/', noCache, function (req, res) {
    res.send('test')
})
router.post('/', noCache, function (req, res) {
    console.log(req.body)
    console.info(req.headers)
    res.send('post test')
})
router.put('/', noCache, function (req, res) {
    console.log(req.body)
    const headers = req.headers
    console.info(headers)

    try {
        const clientToken = headers['x-jwt']
        const decoded = jwt.verify(clientToken, 'asdljfhwoeurwkehfadfadsf');
        console.log('decoded',decoded)
    } catch (err) {
        console.error(err)
    }

    res.send('put test')
})
router.delete('/', noCache, function (req, res) {
    console.log(req.body)
    console.info(req.headers)
    res.send('delete test')
})

module.exports = router