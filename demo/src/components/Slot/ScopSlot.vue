<template>
    <div class="product">
      <div v-for="product in products" :key="product.id">
         <span>{{product.name}}</span>
          <span>{{product.price}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name:"ScopSlot",
        data() {
            return {
                products:[
                    {id:1,name:"Lavie",rating:4,price:4500},
                    {id:2,name:"Mochi",rating:5,price:7000},
                    {id:2,name:"Metro",rating:3,price:2000}
                    ]
            }
        },
    }
</script>

<style scoped>

</style>