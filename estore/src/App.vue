<template>
  <div id="app">
    <TheNavbar/>
    <router-view/>
  </div>
</template>


<script>
import TheNavbar from "./components/navbar/TheNavbar.vue"
export default {
    components:{
       TheNavbar
    },
    beforeMount () {
      const currentUser = localStorage.getItem('currentUser')
      if(currentUser) {
        this.$store.commit('SET_CURRENT_USER', JSON.parse(currentUser))
      }
    }
    
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
