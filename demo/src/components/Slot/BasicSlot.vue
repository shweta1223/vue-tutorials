<template>
    <div>
        <a v-bind:href="url" class="nav-link">
             <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        nam:"BasicSlot",
        data() {
            return {
                url:""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>