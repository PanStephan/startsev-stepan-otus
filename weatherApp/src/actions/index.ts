const weatherLoaded = () => ({
  type: 'WEATHER_LOADED',
})

const weatherReq = (res) => ({
  type: 'WEATHER_REQ',
  payload: {
    res
  }
})

const toggleLike = (id) => ({
  type: 'TOGGLE_LIKE',
  payload: id
})

export {
  weatherReq,
  weatherLoaded,
  toggleLike
}