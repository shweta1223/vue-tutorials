<template>
    <div>
       <h2>Article</h2>
       <h2 v-bind="$attrs">{{title}} {{$attrs}}</h2>
       <h2 v-bind="$attrs">{{name}}</h2>
       <h2 >Published --{{isPublished ? 'Yes' : 'No'}}   {{$attrs}}</h2>
    </div>
</template>

<script>
    export default {
        name:"NonPropsAttributes",
        props:{
            title:String,
            isPublished:Boolean,
            name:String
        },
        inheritAttrs:false
    }
</script>

<style lang="scss" scoped>

</style>