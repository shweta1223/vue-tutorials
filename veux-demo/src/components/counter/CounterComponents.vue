<template>
  <div>
    <div class="counter">
      <h5>Counter -- {{ getCount }}</h5>
      <button @click="decrementCount">Decrease</button>
      <button @click="incrementCount">Increase</button>
      <button @click="resetCount">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CounterComponents",
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapActions(["incrementCount", "decrementCount", "resetCount"]),
  },
};
</script>
