<template>
    <div>
       <h2>This is a popup</h2>
       <input type="text" v-model="name">
       <button @click="$emit('close',name)">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name:"PopupComponent",
        data(){
            return{
                name:""
            }
        }
    }
</script>

<style  scoped>

</style>