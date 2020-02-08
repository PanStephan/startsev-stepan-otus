import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import setting from './setting'

const store =  new Vuex.Store({
  modules: {
    setting
  }
})

export default store