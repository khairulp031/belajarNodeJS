const express = require('express')
const router = express.Router()
const sekolah = require('./v1/sekolah')
const country = require('./v1/country')

router.use('/v1/sekolah', sekolah)
router.use('/v1/nation', country)


module.exports = router