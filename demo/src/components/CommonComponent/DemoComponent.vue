<template>
    <div>
        <ComponentBasic title="My journey with Vue"/>
        <ComponentBasic title="Hello"/>
        <ComponentBasic title="Welcome"/>
        <ComponentBasic v-bind:title=users />
        
    </div>
</template>

<script>
import ComponentBasic from "../pro/ComponentBasic.vue"
    export default {
        components:{
            ComponentBasic

        },
        data(){
            return{
                users: [
        {
          name: 'Frozen Yogurt',
          address: 'Althan',
          
        },
        {
          name: 'Ice cream sandwich',
          address: "Vesu",
          
        },
      ],
      }
        },
        
        created(){
            this.person = "name"
        },
        mounted(){
            console.log(this.person);
        }
    }
</script>

<style lang="scss" scoped>

</style>