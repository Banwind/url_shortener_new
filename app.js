const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes')
const PORT = 3000

require('./config/mongoose')

//在載入視圖時自動套用預設的模板，並可以省略 .hbs 的副檔名
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine','hbs')

app.use(express.static('public')) //設定靜態檔案的路徑，指定 public 為靜態檔案的資料夾。當有靜態檔案請求時，Express 就會自動在指定的 public 資料夾中尋找對應的檔案並回傳。
app.use(express.urlencoded({ extended: true })) //Express內建body-parser，解析POST送過來的req.body，必須放在路由之前
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT,()=>{
  console.log(`This is running on localhost:${PORT}`)
})