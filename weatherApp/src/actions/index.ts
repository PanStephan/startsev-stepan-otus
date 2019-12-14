const getWeather = (weather: string | '') => {
  return {
    type: 'GET_WEATHER',
    payload: weather
  }
}

export {
  getWeather,
}