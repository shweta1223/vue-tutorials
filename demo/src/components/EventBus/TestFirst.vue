<template>
    <div>
        <!-- <p>{{Header}}</p> -->
        {{gender}}
        <BaseInpute name="gender" :value="option1" title="Male" @change="setValue" :checked="option1 === gender"/>
        <BaseInpute name="gender" :value="option2" title="Female" @change="setValue" :checked="option2 === gender"/>



    </div>
</template>

<script>
import { eventBus } from '@/main'
import BaseInpute from '../EventBus/BaseInpute.vue'
    export default {
        components: {
            BaseInpute
        },
        data () {
            return {
                option1: 'm',
                option2: 'f',
                gender: 'm'
            }
        },
        mounted(){
            eventBus.$on("ChangeHeader", (data) => {
               this.Header = data;
               eventBus.$off("ChangeHeader")
            })
        },
        methods: {
            setValue (v) {
                this.gender = v
                console.log(v)
            }
        }
        // beforeMount(){
        //     eventBus.$on("ChangeHeader",this.Header)
        // }
        
    }
</script>

<style lang="scss" scoped>

</style>