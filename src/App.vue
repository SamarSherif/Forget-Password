<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import signIn from './components/SignIn'
export default {
  name: 'App',
  components:{
    signIn
  }
}
</script>

<style>
@import '../main.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
