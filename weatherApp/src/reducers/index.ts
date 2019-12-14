import {weatherInfo} from '../services/getInfo'

interface IPropState {
  weather: []
}

const initialState:IPropState = {
  weather: [],
}

const reducer = (state = initialState, action) => {
  const {payload, type} = action
  console.log(payload)
  switch(type) {
    case 'GET_WEATHER':
      return {
        ...state,
        weather: [
          ...state.weather,
          weatherInfo(payload)
        ]  
      }
    default:
      return {
        ...state
      }  
  }
}

export default reducer