const urlsModel = require('../urls') // 載入url model
const urlsJSON = require('../../urls.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i=0; i < urlsJSON.length; i++) {
    urlsModel.create({ ...urlsJSON[i]})
  }
  console.log('create seed done')
})
