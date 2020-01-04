const fs = require('fs')


const fileList = {
  files: [],
  dirs: []
}

function is_dir(path) {
  try {
    let stat = fs.lstatSync(path)
    return stat.isDirectory()
  }
  catch (e) {
    console.log(e)
  }
}

const detectRoute = (path) => {
  fs.readdir(path, (err, items) => {
    if(err) return console.log(err)

    items.forEach(el => {
      const fileRoute = path + '/' + el
      if(is_dir(fileRoute)) {
        fileList.dirs.push(fileRoute)
        detectRoute(fileRoute)
      }
      else {
        fileList.files.push(fileRoute)
        console.log(fileList)
      }
    })
  })
}


module.exports = {detectRoute}