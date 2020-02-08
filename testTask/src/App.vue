<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import getCurrentDay from './assets/helpers'

export default {

}

window.addEventListener('beforeunload', () => { 
  if(localStorage.getItem('was-in-page')) return null
  else {
    localStorage.setItem('training-days', JSON.stringify(getCurrentDay()))
    localStorage.setItem('was-in-page', true)
  }
})

</script>

<style>

</style>
