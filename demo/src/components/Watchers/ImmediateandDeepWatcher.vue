<template>
  <div> 
    <div>
      <h2>Valoume Traker (0 - 20)</h2>
      <h3>Current Volume {{ volume }}</h3>
    </div>
   
    <div>
      <button @click="volume += 2">Increase</button>
      <button @click="volume -= 2">Decrease</button>
      
    </div>
 
    <div>
      <input type="text" name="" id="" v-model="movie" />
    </div>

    <div>
    <input type="text"  v-model="movieInfo.title" />
    <input type="text"  v-model="movieInfo.actor" />
    </div>
  
    <div>
       <div for v-for="product in products" :key="product">
          <input type="text"  v-model="movieInfo.actor" />
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BindingAttribute",
  data() {
    return {
      volume: 0,
      movie: "",
      movieInfo: {
        title:"",
        actor:""
      },
      products:[
        {id:1,name:'Mochi', price:2000,rating:2},
        {id:2,name:'Catwalk', price:3000,rating:5},
        {id:3,name:'Metro', price:1000,rating:4}
      ]
    };
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue === 16 && newValue > oldValue) {
        alert("volume is high");
      }
    },
    // movie(newvalue){
    //    console.log(`Calling API with movie name = ${newvalue}`);
    // },
    movie: {
      handler(newvalue) {
        console.log(`movie name = ${newvalue}`);   
      },
      immediate: true,
     },
     movieInfo:{
        handler (newValue){
          
            console.log(`movie title = ${newValue.title} and actor is = ${newValue.actor}`);
        },
        deep:true,
        immediate: true,
     }
  },
};
</script>

<style scoped>
</style>    