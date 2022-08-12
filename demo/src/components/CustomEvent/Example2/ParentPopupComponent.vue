<template>
    <div>
       <button v-on:click="showPopup = true">Show Popup</button>
       <popup-component v-show="showPopup" @close="closePopup"/>
    </div>
</template>

<script>
    export default {
        name:"ParentComponent",
        data() {
            return {
                showPopup:false
            }
        },
        emits:{
           close:(name) =>{
               if(!name){
                 return false
               }else{
                return true
               }
           }
        },
        methods: {
            closePopup(name){
                this.showPopup =false
                console.log('name', name);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>