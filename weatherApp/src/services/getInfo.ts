import axios from 'axios'
import {WEATHERSTACK_KEY} from '../config/variables'
 
const weatherInfo = async (query) => {
  return await axios.get(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_KEY}&query=${query}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}

export {
  weatherInfo
}