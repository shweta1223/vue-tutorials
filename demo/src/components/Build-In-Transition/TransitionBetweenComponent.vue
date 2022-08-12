<template>
    <div>

        <button
        v-for="tab in tabs"
        :key="tab"
        :class="[{ active: currentTab === tab }]"
        v-on:click="currentTab = tab">
        {{ tab }}
      </button>

       <transition name="component-fade" mode="out-in">
           <component v-bind:is="currentTabComponent"></component>
      </transition>
    </div>
</template>

<script>
import ComponentA from "../Build-In-Transition/ComponentA.vue"
import ComponentB from "../Build-In-Transition/ComponentB.vue"
    export default {
        name:"TransitionBetweenComponent",
        components:{
            ComponentA,
            ComponentB
        },
        data(){
            return{
               activeTab:'',    
               currentTab: "",
               tabs: ["ComponentA", "ComponentB"]
            }
        },
        computed:{
          currentTabComponent(){
            return this.currentTab;
          }
        }
    }
</script>

<style  scoped>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>