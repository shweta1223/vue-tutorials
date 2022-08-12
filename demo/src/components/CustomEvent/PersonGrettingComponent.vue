<template>
    <div>
          {{title}}
       <button @click="sendEvent">Change Title</button>
    </div>
</template>

<script>
    export default {
        name:"PersonGrettingComponent",
        data(){
            return{
            }
        },
        props:{
            title:{
                type:String
            }
        },
        methods:{
            sendEvent:function(){
                this.$emit('changeTitle','Vue Wizard') 
        }
    }
}
</script>

<style  scoped>

</style>