<template>
    <div>
       <h2 @mouseover="incrementCount">Clicked {{counter}} times</h2>
    </div>
</template>

<script>
import CounterMixin from '../../../mixins/counter.js'

    export default {
        name:"HoverCounter",
        mixins:[CounterMixin],
        data(){
            return{
                counter:0
            }
        },
        methods:{
            incrementCount(){
                this.counter += 2
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>