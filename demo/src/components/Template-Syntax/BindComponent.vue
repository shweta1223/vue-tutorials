<template>
    <div>
       <text-binding/>
       <html-binding/>
       <attribute-binding/>
       <once-binding/>
    </div>
</template>

<script>
import OnceBinding from './OnceBinding.vue'
    export default {
  components: { OnceBinding },
      name:'BindComponent'
  
    } 
</script>

<style lang="scss" scoped>

</style>