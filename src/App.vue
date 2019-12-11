<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <audio id="audio" autoplay :src="require('./assets/media/ainibushiliangsantian.mp3')"></audio> -->
    <router-view name="default"></router-view>
  </div>
</template>

<script>

// import bgImage04 from '../src/assets/images/bg_battery_dead.png'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
