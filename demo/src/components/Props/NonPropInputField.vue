<template>
    <div>
        <h3>{{$attrs}}</h3>
       <input type="text" placeholder="Enter name" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        name:"NonPropInputField",
        props:{
           name:String
           
        },
        inheritAttrs:false
    }
</script>

<style lang="scss" scoped>

</style>