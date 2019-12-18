const weatherLoaded = () => {
  return {
    type: 'WEATHER_LOADED',
  }
}

const weatherReq = (res) => {
  return {
    type: 'WEATHER_REQ',
    payload: {
      res
    }
  }
}

const toggleLike = (id) => {
  return {
    type: 'TOGGLE_LIKE',
    payload: id
  }
}

export {
  weatherReq,
  weatherLoaded,
  toggleLike
}