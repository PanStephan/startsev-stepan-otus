const { exec } = require("child_process")
const fs = require('fs')

exec("./exec")

fs.readFile('./file.txt', 'utf8', (err, data) => {
  if (err) throw err
  cData = data
})

