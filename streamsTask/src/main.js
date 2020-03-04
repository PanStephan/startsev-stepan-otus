const fs = require('fs')

const { split } = require('./utils/splitAndFilter')
const { mergeSort } = require('./utils/sort')
const { convertData } = require('./utils/utils');

( async () => {
  // to run by 1 cmd command
  await require('child_process').exec('./exec')

  const readStream = fs.createReadStream(__dirname + '/files/file.txt', {objectMode: false, encoding: 'utf-8'})
  await split(readStream, 100000000/2, __dirname + '/files/output')

  const cp = (from, to) => {
    return new Promise((resolve, reject) => {
      const read = fs.createReadStream(__dirname + '/files' + from, {objectMode: false, encoding: 'utf-8'})
      const write = fs.createWriteStream(to) 
      read.on('data', (data) => { 
        return mergeSort(convertData(data))
      })    
      read.on('close', () => {      
        write.close()
        resolve() 
      }) 
      read.pipe(write)
    }) 
  }
  
  Promise.all(['/output-0.txt', '/output-1.txt'].map((from) => {
    return cp(from, 'src/files/done.txt')
  })).then(() => {
    console.log('done') 
  })

})()