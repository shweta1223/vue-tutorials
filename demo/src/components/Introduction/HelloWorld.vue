<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-text="mainTitle">
       Hover your mouse over me for a few seconds
    to see my dynamically bound title!
    </span>
    <h2 v-if="seen" >Now you can see me</h2>
    <ol>
    <li v-for="todo in todos" :key="todo.name">
      {{ todo.name }}
    </li>
  </ol>

  <button v-on:click="reverseMessage">Reverse Message</button>

  <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      msg:"Hello World",
      mainTitle:'You loaded this page on ' + new Date().toLocaleString(),
      seen:true,
      todos:[
        {name:'Shweta',age:18},
        {name:'Sonali',age:20},
        {name:'Ayushi',age:25}
      ]
  
    }
  },
  methods: {
    reverseMessage:function(){
       this.msg = this.msg.split("").reverse().join('')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
