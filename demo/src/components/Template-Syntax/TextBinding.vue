<template>
    <div>
        <h1>Text Binding</h1>
        <p>{{name}}</p>
        <p v-text="FullName"></p>
    </div>
</template>

<script>
    export default {
        name:'TextBinding',
        data(){
            return{
              name:'VueJs',
              FullName:'VueJs Tutorial'

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>