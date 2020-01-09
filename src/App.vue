<template>
  <!-- <div id="app"> -->
    
    <v-app id ="app">
    <appheader></appheader>
    <router-view></router-view>
    </v-app>
  <!-- </div> -->
</template>

<script>
import bannerU from './components/bannerUpload'
import appheader from './components/header'
export default {
  components:{
    bannerU,
    appheader

  },
  created() {
    // navigator.geolocation.getCurrentPosition((position)=>{
    //   console.log(position)
    this.$store.dispatch('tryAutoLogin')
    }  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  */
  /* margin-top: 60px; */
}
</style>
