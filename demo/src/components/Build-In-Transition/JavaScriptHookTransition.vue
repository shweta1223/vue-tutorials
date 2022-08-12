<template>
  <div>
    <button @click="show = !show">Toggle demo</button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <p v-if="show">Demo</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "JavaScriptHookTransition",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = "left";
    },
    enter: function (el, done) {
      window.Velocity(el, { opacity: 1, fontSize: "1.4em" }, { duration: 300 });
      window.Velocity(el, { fontSize: "1em" }, { complete: done });
    },
     leave: function (el, done) {
      window.Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 4000 })
      window.Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      window.Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>