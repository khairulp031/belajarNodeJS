const express = require('express')
const router = express.Router()
const { post } = require('../../util/request')

const server = 'http://localhost:9006'

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

module.exports = router