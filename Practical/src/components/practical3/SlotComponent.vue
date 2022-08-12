<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ShowComponent",
};
</script>

<style lang="scss" scoped>
</style>