<template>
    <div>
       
       <h3>AppComponent username -- {{name}}</h3>
       <button @click="changeName">click to change</button>
      
       <component-c :name="name" v-on:changeUsername="updateUserName"/>
     
    </div>
</template>

<script>
    export default {
       name:"ProvideInject",
       data(){
        return{
          name:1
        }
       },
       provide(){
        const appData = {}  //Create a empty object

        /*The static method Object.defineProperty() defines a new property directly
          on an object, or modifies an existing property on an object, and returns the object.*/

        Object.defineProperty(appData, "name", {    //Object.defineProperty(obj, prop, descriptor) 
            enumerable: true,                       //obj ---  The object on which to define the property.
            get: () => this.name,                   //prop --- The name or Symbol of the property to be defined or modified.
        })
 
        return {              //The object that was passed to the function.
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