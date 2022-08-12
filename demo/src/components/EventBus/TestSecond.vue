<template>
    <div>
      <p>Header : {{Header}}</p>
      <button v-on:click.once="changeHeader">Change Header</button>
    </div>
</template>

<script>
import {eventBus} from "../../main"
    export default {
        data() {
            return {
                Header :"My Header"
            }
        },
        methods:{
           changeHeader(){
            this.Header = "Your Header"
            eventBus.$emit("ChangeHeader", this.Header)
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>