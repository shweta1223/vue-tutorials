<template>
    <div>
       <h3 class="Hello">Hello -- {{name}} title -- {{title}} {{}}</h3>
    </div>
</template>

<script>
    export default {
        name:"HelloComponent",
        props:{
            name:{
                type:String,
                default:"Vue!"
            },
            title:{
                type:String,
                default:"Vue Title!"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>