module.exports.sortNum = (num) => {
  return num.sort((a, b) => {
    return a - b
  })
}

module.exports.convertData = (data) =>  {
  return data.split(' ').map(el => {
    // avoid double space !
    if (!isNaN(Number.parseFloat(el)) && !!el[0]) return Number.parseFloat(el)
    else return Math.floor(Math.random() * 100000)
    // else number is or big or double space in file
  })
}