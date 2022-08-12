<template>
    <div class="container">

       <header>
         <slot name="header"></slot>
       </header>

       <main>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
       </main>

       <footer name="footer">
         <slot></slot>
       </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>