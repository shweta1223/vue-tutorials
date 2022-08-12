<template>
  <div>
    <shot-component>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default> </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </shot-component>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>