<template>
  <div class="container">
    <h2>Product Details {{ $route.params.id }}</h2>
    {{getProduct}}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "ProductA",
  data() {
    return {};
  },
  async mounted() {
    console.log(this.$store)
    await this.$store.dispatch("product", this.$route.params.id);
  },
  computed: {
    ...mapState(["product"]),
    ...mapGetters(["getProduct"])
  },
  //props: ["id"],
};
</script>

<style scoped>
img {
  max-width: 50%;
  max-height: 40%;
}
</style>

  