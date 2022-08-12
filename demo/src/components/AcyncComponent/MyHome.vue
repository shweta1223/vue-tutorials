<template>
    <div class="home">
       <h2>My Home</h2>
       <!-- <button @click="show  = !show" >Show List</button>
       <div >
         <MyList v-if="show"/>
       </div> -->

       <button
        v-for="tab in tabs"
        :key="tab"
        :class="[{ active: currentTab === tab }]"
        v-on:click="currentTab = tab">
        {{ tab }}
      </button>
      {{currentTab}}


        <components v-bind:is="currentTabComponent" class="tab" ></components> 
        
              
    </div>
</template>

<script>
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

// const MyList = () => ({
//     component : import(/* webpackChunkName:'myList'*/"../AcyncComponent/MyList"),
//     loading :LoadingComponent,
//     error:ErrorComponent,
//     timeout:10
// });
    export default {
        name:'MyHome',
        components:{
        MyList : ()  => ({
            component : import(/* webpackChunkName:'mylist'*/"../AcyncComponent/MyList"),
            loading :'<div>Loading</div>',
            error:ErrorComponent,
            timeout:5000,
            delay: 3000
        }),
        ActiveHobbies :() => ({
            component :import(/* webpackChunkName:'activehobbies'*/"../AcyncComponent/ActiveHobbies.vue"),
            loading:LoadingComponent,
            error:ErrorComponent,
            timeout:3000,
            delay:1000
        }),
         InActiveHobbies :() => ({
            component :import(/* webpackChunkName:'inactivehobbies'*/"../AcyncComponent/InActiveHobbies.vue"),
            loading:LoadingComponent,
            error:ErrorComponent,
            timeout:4000,
            delay:2000
        }),
        },
        data(){
            return{
                show:false,
                currentTab: "MyList",
                tabs: ["MyList","ActiveHobbies","InActiveHobbies"],
            }
        },
        computed:{
          currentTabComponent(){
            return this.currentTab;
          }
        },
        destroyed(){
         console.log("updated");
        }
    }
</script>

<style scoped>

.home{
    border: 3px solid red;
}

</style>