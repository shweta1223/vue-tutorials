<template>
  <div>
    <input type="text" v-focus />
    <input type="text" v-changestyle />

    <input type="text" v-focus v-changestyle />

    <h2 v-changestyle2>Check update</h2>
    <p v-changestyle2>{{ name }}</p>
    <button @click="name = 'update'">Click Me</button>

    <div v-color2="'red'">componentUpdated</div>

    <div v-color2="'orange'">unbind</div>

    <div v-rainbow="'large'">FontSize</div>
    <div v-rainbow="'small'">FontSize</div>
    <div v-rainbow>FontSize</div>

    <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>

    <div>
     <p>Scroll down the page</p>
    <p v-pin="600">Stick me 200px from the top of the page</p>
    </div>

    <div>
     <p>Scroll down inside this section</p>
    <p v-pin:[direction]="700">I am pinned onto the page at 200px to the left.</p>

</div>

 <div>
     <p v-color-swatch="'red'">Function Shorthand</p>  
</div>

 <div>
     <p v-object-literals="{ color:'red', text:'hello'}"></p>  
  

</div>
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
  data() {
    return {
      name: "Shweta",
      message: "hello!",
      direction: 'left'
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
        console.log(el);
      },
    },
    changestyle: {
      bind: function (e1) {
        e1.style.color = "red";
        e1.style.fontSize = "30px";
        console.log(e1);
      },
    },
    changestyle2: {
      update: function (e2) {
        e2.style.color = "green";
        e2.style.fontSize = "30px";
        console.log(`Check update on click` + e2);
      },
    },
    color2: {
      componentUpdated: function (el, binding) {
        el.style.color = binding.value;
        console.log(el);
      },
    },
    color3: {
      unbind: function (el, binding) {
        el.style.color = binding.value;
        console.log(el);
      },
    },
    demo: {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "Old value: " +
          s(binding.oldValue) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      },
    },
    pin:{
      bind:function( el, binding){
         el.style.position = "fixed"
         var s = (binding.arg == 'left' ? 'left' : 'top')
         el.style[s] = binding.value + 'px'  
      }
    },
    colorSwatch: function (el, binding) {
        el.style.backgroundColor = binding.value
    },

    objectLiterals:{
      bind:function( el, binding){
        console.log(binding.value)
        el.style.color = binding.value.color
        el.innerHTML = binding.value.text
      }
    },
  },
};
</script>

<style scoped>

</style>