const express = require('express')
const router = express.Router()
const URLs = require('../../models/urls')

router.get('/:short_url', (req, res) => {
  const { short_url } = req.params //抓取網址上的變數
  URLs.findOne({ short_url }) //過濾條件，用findOne抓出單一資料
    .lean()
    .then((doc)=> {
      if (doc) {
        res.redirect(doc.origin_url) //如果是就跳轉，不是就404
      } else {
        res.status(404).send('Not found')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router