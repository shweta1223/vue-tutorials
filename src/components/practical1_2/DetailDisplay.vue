<template>
<div @click="buttonClick">   
        <h4><span>Title : -</span>  {{ title }}</h4>
        <p><span>Description : -</span> {{ body }}</p>
</div>
</template>

<script>
export default {
    name: "DetailDisplay",
    
    data(){
        return{
            data(){
                return{
                 showModal: false
                }
            }
        }
    },
    props: { 
     title:{
         type:String,         
         required:true,
         default:"Default Title"
     }, 
     body: {
        type:String,
        required:false,
     },
},
methods: {
    buttonClick () {
        console.log('buttonClick')
        this.$emit('click')
    }
}
        
 }
</script>

<style scoped>


  

</style>
