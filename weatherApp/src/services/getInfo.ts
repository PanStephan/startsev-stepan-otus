import axios from 'axios'
 
const weatherInfo = async (query) => {
  return await axios.get(`http://api.weatherstack.com/current?access_key=e0a2f662da589fccdc3480dbab552efb&query=${query}`)
    .then(res => res.data)
}

export {
  weatherInfo
}