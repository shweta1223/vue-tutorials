<template>
    <div>
        <h2>Costume Events</h2>
       <persongretting-component :title="title" v-on:changeTitle="updateTitle($event)"/>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title:"Vue Learning"
            }
        },
        methods:{
            updateTitle:function(updateTitle){
                this.title = updateTitle
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>