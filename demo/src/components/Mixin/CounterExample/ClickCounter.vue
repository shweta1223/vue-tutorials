<template>
    <div>
       <button @click="incrementCount">Clicked {{counter}} times</button>
     <button @click="fooo">fooo</button>
    </div>
</template>

<script>
    export default {
        name:"ClickCounter",
        data(){
            return{
                counter:0
            }
        },
        methods:{
            incrementCount(){
                this.counter += 1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>