import getCurrentDay from '../assets/helpers'

export default {
  state: {
    trainingDays: 0,
    settingsData: {
      duration: 1,
      difficulty: 1,
      addition: false,
      subtraction: false,
      multiplication: false,
      division: false,
      involution: false
    }
  },
  mutations: {
    setSettingsData(state, payload) {
      console.log(state.settingsData = [...state.settingsData, payload])
      state.settingsData = [...state.settingsData, ...payload]
    }
  },
  actions: {
    setSettingsData({commit}, payload) {
       commit('setSettingsData', payload)
     }
  },
  getters: {
    getTrainingDays(state) {
      const trainingDays = localStorage.getItem('training-days')
      if(trainingDays) {
        return getCurrentDay() - trainingDays
      } else return state.trainingDays
    }
  }
}
