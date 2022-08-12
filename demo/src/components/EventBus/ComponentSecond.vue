<template>
    <div>
       <button @click="changeAge">Change Age</button>
    </div>
</template>

<script>
import { eventBus } from "../../main"
    export default {
        name:"ComponentSecond",
        methods:{
            changeAge:function(){
                eventBus.$emit("age_changed", 41)
                  
            }
        }
    }
</script>

<style scoped>

</style>