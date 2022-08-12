<template>
  <div>
    <div class="table">
      <div class="”Header”">
        <h3 class="”Heading”">Shopping Wishlist {{ totalItemsWish }}</h3>
      </div>

      <div class="layout-inline row th">
        <div class="col col-pro">Product</div>
        <!-- <div class="col col-qty align-center">Description</div> -->
        <div class="col col-price align-center">Price</div>
        <div class="col col-price align-center">Action</div>
      </div>
    </div>
    <div v-for="p in productsWish" :key="p.id">
      <TheWishlist>
        <template v-slot:image>
          <img :src="p.image" />
        </template>

        <template v-slot:title>
          {{ p.title }}
        </template>

        <!-- <template v-slot:description> 
           {{p.description}}
        </template> -->

        <template v-slot:price>
          {{ "$" + p.price }}
        </template>

        <template v-slot:delete>
          <button @click="addToCart(p) ">Add To cart</button>
          <button @click="removeItem(p)">Remove</button>
        </template>
      </TheWishlist>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import TheWishlist from "../../components/wishlist/TheWishlist";
export default {
  name: "WishlistS",
  data() {
    return {
        isDisabled: true,

    }
  },
  components: {
    TheWishlist,
  },

  computed: {
    ...mapState(["wishlist"]),
    // ...mapGetters(["allProductsWish"]),
    ...mapGetters({
      productsWish: "allProductsWish",
      totalItemsWish: "getNumberOfProductsWish",
    }),
  },
  methods: {
    removeItem(product) {
      this.$store.dispatch("removeItem", product);
    },

    ...mapActions(["addToWishlist"]),
    async addToCart(product){
      await this.$store.dispatch("addToCart", product)
      this.$store.dispatch('removeFromWishlist',product.id)
    }
  },
};
</script>

<style  scoped>
button {
  background-color: #008cba; /* Green */
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
.layout-inline > * {
  display: inline-block;
}

.align-center {
  text-align: center;
}

.th {
  background: #008cba;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
}

.tf {
  background: #008cba;
  text-transform: uppercase;
  text-align: right;
  font-size: 1.5em;
}

.tf p {
  color: #fff;
  font-weight: bold;
}

.col {
  padding: 1em;
  width: 12%;
}

.col-pro {
  width: 54%;
}

.col-pro > * {
  vertical-align: middle;
}

.col-qty {
  text-align: center;
  width: 17%;
}

.col-numeric p {
  font: bold 1.8em helvetica;
}

.col-total p {
  color: #12c8b1;
}

.tf .col {
  width: 30%;
}

.row > div {
  vertical-align: middle;
}

.row-bg2 {
  background: #f7f7f7;
}

.visibility-cart {
  position: absolute;
  color: #fff;
  top: 0.5em;
  right: 0.5em;
  font: bold 2em arial;
  border: 0.16em solid #fff;
  border-radius: 2.5em;
  padding: 0 0.22em 0 0.25em;
}

.col-qty > * {
  vertical-align: middle;
}

.col-qty > input {
  max-width: 2.6em;
  max-height: 50px;
  margin: 3px;
}

a.qty {
  width: 1em;
  line-height: 0.8em;
  border-radius: 5px;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  background: #43ace3;
  color: #fff;
}

a.qty:hover {
  background: #3b9ac6;
}

.btn {
  padding: 10px 30px;
  border-radius: 0.3em;
  font-size: 1.4em;
  font-weight: bold;
  background: #43ace3;
  color: #fff;
  box-shadow: 0 3px 0 rgba(59, 154, 198, 1);
}

.btn:hover {
  box-shadow: 0 3px 0 rgba(59, 154, 198, 0);
}

.delete {
  background-color: #f44336; /* Green */
  border: none;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.btn-update {
  float: right;
  margin: 0 0 1.5em 0;
}

.transition {
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 755px) {
  .container {
    width: 98%;
  }

  .col-pro {
    width: 35%;
  }

  .col-qty {
    width: 44%;
  }

  img {
    max-width: 100%;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 591px) {
}
</style>