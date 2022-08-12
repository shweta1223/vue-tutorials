<template>
    <div>
       <h4>Active Hobbies</h4>
       <input type="text">
    </div>
</template>

<script>
    export default {
        name:"ActiveHobbies",
        deactivated(){
              console.log("Active Hobbies -- deactivated!!");
             
        },
        activated(){
             console.log("Active Hobbies -- activated!!");
             
        },
        destroyed(){
             console.log("Active Hobbies -- destroyed!!");
        }
    }
</script>

<style lang="scss" scoped>

</style>