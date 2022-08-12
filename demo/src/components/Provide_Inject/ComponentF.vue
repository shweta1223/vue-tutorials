<template>
    <div>
      <h3>Component F</h3>
      <h4>Component F username -- {{appData.name}}</h4>
      <button @click="sendUsername">Change username</button>
    </div>
</template>

<script>
    export default {
        name:"ComponentF",
        inject:["appData"],
        methods:{
            sendUsername:function(){
            this.$emit('changeUsername','Vue Wizard') 
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>