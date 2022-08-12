<template>
    <div>
       <h1>HTML Binding</h1>
       <p>{{message}}</p>   
       <p v-html="message"></p>
    </div>
</template>

<script>
    export default {
        name:"HTMLBinding",
        data(){
            return{
                message:"<p>HTML Binding with v-html</p>"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>