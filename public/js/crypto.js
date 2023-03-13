const crypto = require('crypto')

function hash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  const digest = hash.digest('base64');
  const filtered = digest.replace(/[^A-Za-z0-9]/g, '').slice(0, 5);
  return filtered;
}

module.exports = { hash } // 在 short.js 中，使用 module.exports = { hash } 導出一個對象，該對象中包含了一個 hash 函數，這樣在其他檔案中導入 short.js 時，就可以使用 hash 函數了。