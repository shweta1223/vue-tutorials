<template>
    <div>
       <h2 v-bind:style="{
           color:highlightColor,
           fontSize:headerSize + 'px',
            padding:'20px'    

       }">Inline Style</h2>

       <h2 v-bind:style="hederStyleObject">Style Object</h2>

       <div v-bind:style="[baseStyleObject, successStyleObject]">Success Style</div>
    </div>
</template>

<script>
    export default {
      name:"StyleBinding",
      data(){
          return{
            highlightColor:'orange',
            headerSize:50,
            hederStyleObject:{
                color:'Green',
                fontSize:'50px',
                padding:'20px' 
            },
            baseStyleObject:{
                fontSize :"50px",
                padding:"20px"
            },
            successStyleObject:{
                color:'red',
                backgroundColor:'lightgreen',
                border:'1px solid green'
            }
           
          }
      }
    }
</script>

<style scoped>

</style>