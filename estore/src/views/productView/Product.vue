<template>
  <div class="container">
    <h2>Product Details {{ $route.params.id }}</h2>
      <ProductDetailsCom>
        <h2>Details page</h2>
        <template v-slot:image>
          <img v-bind:src="getProduct.image" />
        </template>

        <template v-slot:title>
          <h4>
            {{ getProduct.title }}
          </h4>
        </template>

        <template v-slot:price>
          <small>{{ getProduct.price }}</small>
        </template>

        <template v-slot:description>
          <small>{{ getProduct.description }}</small>
        </template>

        <template v-slot:category>
          <small>{{ getProduct.category }}</small>
        </template>

        <template v-slot:action>
          <button class="btn-primary" @click="addToWishlist(product)">Wishlist</button>
         <button class="btn-primary" @click="addToCart(product)">Add to Cart</button>
        </template>

        <template v-slot:rating>
          <small>{{ getProduct.rating.rate }}</small>
        </template>

        <template v-slot:rating-counts>
          <small>{{ getProduct.rating.count }}</small>
        </template>
      </ProductDetailsCom>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from "vuex";
import ProductDetailsCom from "../../components/product/ProductDetailsCom.vue";
export default {
  name: "ProductA",
  components: {
    ProductDetailsCom,
  },
  data() {
    return {};
  },
  async mounted() {
    console.log(this.$store)
    await this.$store.dispatch("product", this.$route.params.id);
  },
  computed: {
    ...mapState(["product"]),
    ...mapGetters(["getProduct"]),
    
  },
  methods:{

       ...mapActions(['addToCart', 'addToWishlist'])
       
  
    
  }

};
</script>

<style  scoped>

.btn-primary{
  background-color: #008CBA; /* Green */
  border: none;
  color: white;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;

}
img {
  max-width: 50%;
  max-height: 40%;
}
</style>