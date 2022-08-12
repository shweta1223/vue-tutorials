<template>
    <div>
       <div>
       <h1 v-if="awesome">Vue is awesome !</h1>
       <h1 v-else>Oh no</h1>
       </div>
      

      <div>
          {{num}}
          <h2 v-if="num === 0">The number is Zero</h2>
          <h2 v-else-if="num < 0">The number is negative</h2>
          <h2 v-else-if="num > 0">The number is Positive</h2>
          <h2 v-else>Not a number</h2>
      </div>
      
      <template v-if="display">
          <h2>Vue</h2>
          <h2>JavaScript</h2>
      </template>
      

      <h2 v-show="showElement">Using v-Show</h2>
      <h2 v-if="showElement">Using v-if</h2>




    </div>
</template>

<script>
    export default {
        name:"ConditionalRendering",
        data(){
            return{
             awesome:false,
             num:-5865,
             display:true,
             showElement:false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>