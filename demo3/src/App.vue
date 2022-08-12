<template>
  <div id="app">
    <!-- <search-user/> -->
    <!-- <buttonConditional-component /> -->
    <!-- <simple-component/> -->
    <!-- <user-form/> -->
    <div>
  <TheNavigation></TheNavigation>
 
  <main>
     <router-view></router-view>
  </main>
  </div>
   
  </div>
</template>

<script>
import TheNavigation from './components/practical5/nav/TheNavigation.vue';

export default {
  name: "App",
  components:{
    TheNavigation
  }

 
};
</script>

<style>
</style>