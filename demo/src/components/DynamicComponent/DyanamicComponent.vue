<template>
    <div>
        <h2>Dynamic Components With V-if Example - 1</h2>
        <button @click="activeTab='TabA'">Tab A</button>
        <button @click="activeTab='TabB'">Tab B</button>
        <button @click="activeTab='TabC'">Tab C</button>

       
       <TabA v-if="activeTab === 'TabA'"/>
       <TabB v-if="activeTab === 'TabB'"/>
       <TabC v-if="activeTab === 'TabC'"/>
     
    </div>

    
</template>

<script>
import TabA from './TabA.vue'
import TabB from './TabB.vue'
import TabC from './TabC.vue'
    export default {
        name: 'DynamicComponent',
        data(){
            return{
               activeTab:'',    
               currentTab: "",
               tabs: ["TabA", "TabB", "TabC"]
            }
        },
        components:{
           TabA,
           TabB,
           TabC,
        },
        computed:{
          currentTabComponent(){
            return this.currentTab;
          }
        }

        
        
    }
</script>

<style scoped>
      
</style>