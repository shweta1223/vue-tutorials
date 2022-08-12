<template>
    <div>
       <h1>Attribute Binding</h1>
       <p v-bind:id="headingID">ID Attributes</p>
       <button v-bind:disabled="!isDisabled">Bind</button>
    </div>
</template>

<script>
    export default {
        name:'AttributeBinding',
        data(){
            return{
              headingID:'Main Heading',
              isDisabled: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>