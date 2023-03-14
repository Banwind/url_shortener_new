const urlsModel = require('../urls') // 載入url model
const urlsJSON = require('../../urls.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  // 創建所有資料庫項目
  const createPromises = urlsJSON.map(data => urlsModel.create({ ...data }))
  Promise.all(createPromises)
    .then(() => {
      console.log('create seed done')
      db.close()
    })
    .catch(error => {
      console.error(error)
      db.close()
    })
})
