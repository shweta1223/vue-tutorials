<template>
  <div>
   <h2>{{1+5+4}}</h2>
 <h2>Add Method : {{add()}}</h2>
 <h2>Add Method : {{add(2,3,5)}}</h2>
 <h2>Add Method : {{add(10,15,5)}}</h2>
 <h2>Multiply method - {{multiply(10)}}</h2>
 </div>
</template>

<script>

    export default {
          data() {
            return{
                basemultiplier:5,
                baseValue:2
            }
          },
          methods:{
              add(a, b, c){
                  return a + b + c
              },
              multiply(num){
                 return num * this.basemultiplier
              }

          } 
 }
    
</script>

<style scoped>
</style>