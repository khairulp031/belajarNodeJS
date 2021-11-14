const express = require('express')
const router = express.Router()
const sekolah = require('./v1/sekolah')
const country = require('./v1/country')
const login = require('./v1/login')
const country_v2 = require('./v2/country')
router.use('/v1/login', login)

const { verifyLogin, verifyToken } = require('../util/token')
router.use('/v1/sekolah', verifyToken, verifyLogin, sekolah)
router.use('/v1/nation', verifyToken, verifyLogin, country)
router.use('/v2/nation', verifyToken, verifyLogin, country_v2)


module.exports = router