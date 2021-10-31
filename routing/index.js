const express = require('express')
const router = express.Router()
const sekolah = require('./v1/sekolah')

router.use('/v1/sekolah', sekolah)



module.exports = router