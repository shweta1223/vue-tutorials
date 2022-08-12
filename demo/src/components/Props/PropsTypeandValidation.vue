<template>
<div>
   <h2>{{ title }}  {{ name }} {{likes}} {{ company }} {{isPublished}} {{commentIds}} {{author}}</h2>
   
  </div> 
</template>

<script>

export default {
    name: "ComputedProperties",
    props: {
    //  isActive:{ 
    //     type
    //  }   
     title:{
         type:String,         
         required:true,
         default:"Default Title"
     }, 
     name:String,
     company:String,
     likes: {
        type:Number,
        required:false,
        default:0
     },
     isPublished: Boolean,
     commentIds: Array,
     author: Object,
     callback: Function,
     contactsPromise: Promise // or any other constructor
}
        
}
</script>

<style scoped>
</style>
