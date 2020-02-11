(async () => {
  // to run by 1 cmd command
  await require('child_process').exec('./exec')

  const fs = require('fs')
  const stream = require('stream')
  
  const readStream = fs.createReadStream(__dirname + '/file.txt', {encoding: 'utf-8'})
  readStream.on('data', (dataChunk) => {
    const data = dataChunk.split(/\b(\s)/)
    console.log(data)
  })

})()


