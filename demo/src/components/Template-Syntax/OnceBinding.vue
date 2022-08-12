<template>
    <div>
       <h1>Binding with v-once</h1>
       <p v-once>This will never change : {{message}}</p>
    </div>
</template>

<script>
    export default {
        name:'OnceBinding',
        data(){
            return{
              message:"Hello",
              
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>