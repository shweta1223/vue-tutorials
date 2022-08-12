<template>
    <div>
       <h1> {{name  | reverseString | uppercase }}   </h1>
       <h2> {{message | capitalize }} </h2>

        <input type="text" v-bind:id="message | capitalize">
    </div>
</template>

<script>
    export default {
        name:"FilterComponent",
        data(){
            return{
              name:'Aureate Labs',
              message:'hello world'
            }
        },
        filters:{
            uppercase:function(value){
                return value.toUpperCase();
            },
            capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
  }
        }
    }
</script>

<style lang="scss" scoped>

</style>