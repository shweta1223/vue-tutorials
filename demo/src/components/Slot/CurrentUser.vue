<template>
    <div>
       <span v-bind:user="user">
       <slot>{{ user.fastName }}</slot>
</span>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                firstname :"Shweta",
                lastname:"Singh",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>