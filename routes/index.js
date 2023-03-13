const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const short = require('./modules/short')
const link = require('./modules/link')

router.use('/URLs', link)
router.use('/shortener', short)
router.use('/', home)

module.exports = router