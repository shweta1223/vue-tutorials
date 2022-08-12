<template>
 <div>
   <!-- <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Shweta'">{{name}}</h2>
    
   </template> -->
  </div>
  
</template>

<script>

    export default {
          name:"BindingAttribute",
          data() {
            return{
              names:['Shweta','Ayushi','Sonali'],
            }

           
          }   
 }
    
</script>

<style scoped>
</style>