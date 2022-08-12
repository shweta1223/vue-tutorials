<template>
    <div>
       <h2 v-once>{{Lastname}}</h2>
       <button @click="name = 'Rajput'">Chnage name</button>
        <h2 v-pre>{{Lastname}}</h2>
    </div>
</template>

<script>

    export default {
          name:"BindingAttribute",
          data() {
            return{
            Lastname:"Singh"
              
            }

           
          }   
 } 
    
</script>

<style scoped>
</style>