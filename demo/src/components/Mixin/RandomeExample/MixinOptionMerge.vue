<template>
  <div>
    <h2>{{ message }} {{ foo }} {{ bar }}</h2>
    <button @click="barr">barr</button>
    <button @click="conflicting">conflicting</button>
    <button @click="fooo">fooo</button>
    <h2>{{fullname}}</h2>
  </div>
</template>

<script>
import message from "../../../mixins/message";
export default {
  name: "mixinOptionMarge",
  mixins: [message,message],
  /* ------------Watchers------------ */
  data() {
    return {
      message: "Message from Component",
      bar: "pqr",
      fname:'Shweta',
      lname:'Singh',
      mname:'Anil'
    };
  },
  /* ------------Lifecycle------------ */
  beforeCreate() {
    console.log(this.$data);
  },
  created: function () {
    console.log("component hook called");
  },
   /* ------------Methods------------ */
  methods: {
    barr: function () {
      console.log("bar");
    },
    conflicting: function () {
      console.log("from self");
    },
  },
//   computed:{
//       fullname(){
//         return this.fname + " " + this.lname
//       }
//   }
};
</script>

<style scoped>
</style>