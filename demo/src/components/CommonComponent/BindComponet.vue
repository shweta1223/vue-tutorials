<template>
    <div>
       <!-- <bind-text/>
       <bind-html/>
       <bind-attribute/>
       <bind-class/>
       <bind-style/>
       <conditional-rendering/>
       <list-rendering/>
       <custome-event/>
       <person-component/> -->
       <h3>AppComponent username -- {{name}}</h3>
       <button @click="changeName">click to change</button>
      
       <component-c :name="name" v-on:changeUsername="updateUserName"/>
       <!-- <EventHandling/> -->

       <frame-slot>
         <h3>Hello</h3>
         Your Profile
       </frame-slot>
      
       <submit-button>
        save
       </submit-button>

       <base-layout>

        <template v-slot:header>
        <h1>Here might be a page title</h1>
        </template>

        <template v-slot:default>
         <p>A paragraph for the main content.</p>
         <p>And another one.</p>
        </template>

         <p>A paragraph for the main content.</p>
         <p>And another one.</p>

         <template v-slot:footer>
         <p>Here's some contact info</p>
         </template>

       </base-layout>

       <current-user>
         <template v-slot:default="slotProps">
           {{ slotProps.user.firstName }}
         </template>
       </current-user>


       <dynamic-component></dynamic-component>

       <async-component></async-component>
       
    </div>
</template>

<script>
import CurrentUser from './Slot/CurrentUser.vue';

//import EventHandling from "./EventHanding.vue"

    export default {
       name:"BindComponet",
       components:{
              CurrentUser
             
          //EventHandling
       },
       data(){
        return{
          name:1
        }
       },
       beforeCreate(){
          console.log('beforeCreate()', this.count);
        },

       created ()  {console.log('Having this or not in created', this.name)},

       mounted: () => {console.log('Having this or not in mounted', this)},

       provide(){
        const appData = {}

        Object.defineProperty(appData, "name", {
            enumerable: true,
            get: () => this.name,
        })

        return {
            appData
        }
        // return{
        //   username:this.name
        // }
       },
       methods:{
          changeName:function(){
             this.name++
          },

            updateUserName:function(updateUserName){
              console.log('!!!!!')
                this.title = updateUserName
            }
        
       },
        
    }
</script>

<style lang="scss" scoped>

</style>