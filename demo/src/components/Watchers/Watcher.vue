<template>
    <div>
     <h2>Valoume Traker (0 - 20)</h2>
     <h3>Current Volume {{volume}}</h3>

     <button @click="volume +=2">Increase</button>
     <button @click="volume -=2">Decrease</button>
    </div>
</template>

<script>
    export default {
          name:"BindingAttribute",
          data() {
            return{
              volume:0           
               }

           
          },
          watch:{
             volume(newValue, oldValue){
                 if(newValue === 16  && newValue > oldValue
                 ){
                  alert("volume is high")
             }
             }
       }
 }
    
</script>

<style scoped>
</style>