<template>
    <div>
        <h2>Fullname - {{firstname}} {{lastname}}</h2>
        <h2>Computed Fullname  :  {{fullname}}</h2>
        <h2>Total - {{ items.reduce((total, curr ) => (total =  total + curr.price), 0)}}</h2>
        <button @click="items.push({id:4,title:'Keyword',price:50})">Add items</button>
        <h2>Total with computed propeties = {{total}}</h2>
        <!-- <h2>Method total - {{getTotal()}}</h2>    ask this to Rahul sir why this not display -->
    </div>
       
</template>

<script>

    export default {
          name:"ComputedProperties",
          data() {
            return{
           
              firstname:'Shweta',
              lastname:'Singh' ,
              items:[{
                  id:1,
                  title:'TV',
                  price:100,
              },
              {
                  id:2,
                  title:'Phone',
                  price:200,
              },
              {
                  id:3,
                  title:'Laptop',
                  price:300,
              },
              ]
            }
          },
          method:{
              getTotal(){
                  return this.items.reduce((total, curr ) => (total =  total + curr.price), 0) 
              }
          },
          computed:{
              fullname(){
                 return this.firstname + this.lastname
              },
              total(){
                return this.items.reduce((total, curr ) => (total =  total + curr.price), 0) 
              }
          }   
 }
    
</script>

<style scoped>
</style>