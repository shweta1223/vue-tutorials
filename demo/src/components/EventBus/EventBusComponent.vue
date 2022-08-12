<template>
    <div>
       <component-first/>
      <component-second/>
      <test-first/>
      <test-second/>
    </div>
</template>

<script>
import TestFirst from './TestFirst.vue'
import TestSecond from './TestSecond.vue'
    export default {
  components: { TestFirst, TestSecond },
        
    }
</script>

<style lang="scss" scoped>

</style>