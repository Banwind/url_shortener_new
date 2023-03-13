const express = require('express')
const router = express.Router()
const URLs = require('../../models/urls')

router.get('/', (req, res) => {
  URLs.find()
    .lean()
    .then(() => res.render('index.hbs'))
    .catch(error => console.error(error))
})

module.exports = router