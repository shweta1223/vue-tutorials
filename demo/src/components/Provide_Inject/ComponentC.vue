<template>
    <div>
       <h1>Component C</h1>
       <component-e/>
       <component-f @changeUsername="sendUsername1"/>
    </div>
</template>

<script>
import ComponentE from './ComponentE.vue'
    export default {
  components: { ComponentE },
        name:"ComponentC",
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>