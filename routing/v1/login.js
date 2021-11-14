const env = require('node-env-file');
env('.env');
const express = require('express')
const router = express.Router()

const { post, get, del } = require('../../util/request')

const server = 'http://localhost:9007'

router.post('/', async function (req, res) {
    console.log('req', req.originalUrl)
    try {
        const data = await post(
            req,
            res,
            server,
            req.originalUrl,
            req.headers["csrf"],
            req.headers.cookie,
            req.body)
        return res.json(data)
    } catch (e) { }
    return res.json({ status: "NOT OK" })
})

router.get('/createtoken', async function (req, res) {
    console.log('req', req.originalUrl)
    try {
        const data = await get(
            req,
            res,
            server,
            req.originalUrl,
            req.headers["csrf"],
            req.headers.cookie)
        return res.json(data)
    } catch (e) { }
    return res.json({ status: "NOT OK" })
})

router.delete('/', async function (req, res) {
    console.log('req', req.originalUrl)
    try {
        const data = await del(
            req,
            res,
            server,
            req.originalUrl,
            req.headers["csrf"],
            req.headers.cookie)
        return res.json(data)
    } catch (e) { }
    return res.json({ status: "NOT OK" })
})

module.exports = router