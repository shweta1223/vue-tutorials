<template>
    <div>
        <h2>Component E</h2>
        <component-f @changeUsername="sendUsername1"/>
    </div>
</template>

<script>
import ComponentF from './ComponentF.vue'
    export default {
  components: { ComponentF },
        name:"ComponentE",
        methods:{
            sendUsername1:function(){
            console.log('222222') 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>