const express = require('express')
const router = express.Router()
const URLs = require('../../models/urls')
const short = require('../../public/js/crypto')

router.get('/', (req, res) => {
  const origin_url = req.query.origin_url // 獲取 URL 中的查詢參數（Query String），即 URL 中問號後面的參數
  const short_url = short.hash(origin_url)
  const URL = new URLs({ origin_url:origin_url, short_url:short_url})
  
  URLs.findOne({ origin_url })
    .then((doc) => {
      if (doc) {
        console.log('URL already in the database')
        res.render('short.hbs', { short_url })
      } else {
        URL.save()
          .then(() => {
            console.log('URL saved to database')
            res.render('short.hbs', { short_url })
          }) 
      }
    })
    .catch(error => console.log(error))
})

module.exports = router

// 還需要改動