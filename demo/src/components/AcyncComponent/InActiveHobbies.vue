<template>
    <div>
       <h4>In-Active Hobbies</h4>
       <input type="text">
    </div>
</template>

<script>
    export default {
        name:"InActiveHobbies",
        deactivated(){
              console.log("InActiveHobbies -- deactivated!!");
             
        },
        activated(){
             console.log("InActiveHobbies -- activated!!");
             
        },
        destroyed(){
             console.log("InActiveHobbies  -- destroyed!!");
        }
    }
</script>

<style lang="scss" scoped>

</style>