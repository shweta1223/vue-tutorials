<template>
  <div>First Component {{ age }}</div>
</template>

<script>
import { eventBus } from "../../main"
    export default {
        name:"ComponentFirst",
        data() {
            return {
                age: 0
            }
        },
        beforeMount() {
            eventBus.$on("age_changed", (data) => {
                console.log('age_changed:: called')
                this.age = data;
            })
        },
         destroyed:function(){
            console.log('age_changed destroyed:: called')
            eventBus.$off("age_changed")
         }
    }
</script>

<style lang="scss" scoped>
</style>