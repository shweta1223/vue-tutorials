<template>
  <div>
    <div id="animated-number-demo">
      <input v-model.number="number" type="number" step="20" />
      <p>{{ animatedNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimateStateWithWatchers",
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
    };
  },
  computed:{
   animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch:{
    number(newValue){
             window.gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>