<template>
    <div>
       Parent Component
       <button @click="showChild = !showChild">Toggle Child</button>
       <ChildCompoent v-if="showChild"/>
    </div>
</template>

<script>
function cc () {
window
}
import ChildCompoent from './ChildCompoent.vue'
    export default {
        name: 'ParentCom',
        components:{
             ChildCompoent
        },
        data(){
            return {
                showChild:true,
            }
        },
        
        beforeCreate(){
          console.log('Parent beforeCreate()');
        },
        created(){
            
            console.log('Parent created()');
        },

        beforeMount(){
            console.log('Parent beforeMount');
        },
        mounted(){
            cc()
            console.log('Parent mounted');
        },

        beforeUpdate(){
            console.log('Parent beforeupdate');
        },
        updated(){
            console.log('Parent updated');
        },
        beforeDestroy(){
            console.log('Parent beforeDestroy ');
        },
        destroyed(){
            console.log('Parent destroyed');
        }
   


    }
</script>

<style lang="scss" scoped>

</style>