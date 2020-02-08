// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Pages

import Main from './components/pages/Main'
import NotFound from './components/pages/NotFound'

// Routering
export default new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '*', component: NotFound }
  ]
})