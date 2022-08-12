<template>
    <div>
        <p>{{ text }}</p>
   <button v-on:click="reverseMessage">Reverse Text</button>
    </div>
</template>

<script>
    export default {
        name:"EventBinding",
        data(){
            return{
               text:"Event Binding" 
            }
        },

        methods: {
            reverseMessage:function(){
             this.text = this.text.split("").reverse().join('')
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>