<template>
    <div>
      <h1>MyList</h1>
    </div>
</template>

<script>
    export default {
        name:"MyList",
        deactivated(){
              console.log("My List -- deactivated!!");
             
        },
        activated(){
             console.log("My List  -- activated!!");
             
        },
        destroyed(){
             console.log("My List  -- destroyed!!");
        }
    }
</script>

<style lang="sass" scoped>

</style>