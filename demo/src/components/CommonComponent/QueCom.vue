<template>
    <div>
       <button @click="changeName"> Change</button>
        {{pName}}

        <div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
  </div>

</div>
    </div>
</template>

<script>
    export default {methods: {
        changeName () {
                this.pName = "Tiwari Shweta"
                console.log('OnClick::', this.pName)
            }
        },
        beforeCreate () {
            console.log('before create::', this)
        },
        created () {
            this.pName = "Shweta Singh"
            console.log('created::', this.pName)
        },
        mounted () {
            console.log('mounted::', this)
        },
        data(){
            return{
                activeTab:''
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>