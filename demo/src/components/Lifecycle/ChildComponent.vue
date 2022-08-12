<template>
    <div>
       Child Component
    </div>
</template>

<script>
    export default {
        name:'ChildCom',

        beforeCreate(){
          console.log('Child beforeCreate()');
        },
        created(){
            console.log('Child created()');
        },

        beforeMount(){
            console.log('Child beforeMount');
        },
        mounted(){
            console.log('Child mounted');
        },

        beforeUpdate(){
            console.log('Child beforeupdate');
        },
        updated(){
            console.log('Child updated');
        },
        beforeDestroy(){
            console.log('Child beforeDestroy ');
        },
        destroyed(){
            console.log('Child destroyed');
        }
    }
</script>

<style  scoped>

</style>