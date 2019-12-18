import createId from '../services/createId'

interface IPropState {
  weather: []
}

const initialState:IPropState = {
  weather: [],
}

const reducer = (state = initialState, action) => {
  const {payload, type} = action
  switch(type) {
    case 'WEATHER_REQ':
      const id = createId()
      return {
        ...state,
        weather: [
          ...state.weather,
          ...[payload].map(el => {
            return {
              ...el.res,
              id,
              like: false,
              loaded: false
            }
          })
        ]  
      }
    case 'WEATHER_LOADED': 
      return {
        ...state, 
        weather: [
          ...state.weather.map((el: Array<any>) => {
            return {
              ...el,
              loaded: true
            }
          })
        ]
      }
    case 'TOGGLE_LIKE': 
    const likedEl = state.weather.findIndex((el: Array) => el.id === payload)
      return {
        ...state,
        weather: [
          ...state.weather.map((el: Array) => {
            if(el.id === payload) return {
              ...el,
              like: !state.weather[likedEl].like
            }
            else return {
              ...el
            }
          }),          
        ]
      }
    default:
      return {
        ...state
      }  
  }
}

export default reducer