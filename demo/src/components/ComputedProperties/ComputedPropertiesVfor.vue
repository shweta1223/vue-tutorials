<template>
 <div>
    <!-- <template v-for="item in items" :key="item.id">
          <h2 v-if="item.price > 100">{{item.title}}{{item.price}}</h2>
    </template> -->

    <h2 v-for="item in expensiveItems" :key="item.id">
       Computed Properties and V-for ---  {{item.title}}{{item.price}}
    </h2>
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
          computed:{
              total(){
                return this.items.reduce((total, curr ) => (total =  total + curr.price), 0) 
              },
              expensiveItems(){
                return this.items.filter(item => item.price > 100)
              }
          }   
 }
    
</script>

<style scoped>
</style>