<template>
  <div>
    <div class="wrapper">
      <select
        class="btn content"
        v-model="selectedCategory"
        @change="onChangeCategory"
      >
        <option value="">Select a category</option>
        <option
          v-for="category in getCategories"
          :key="category"
          :value="category"
          class="list"
        >
          {{ category }}
        </option>
      </select>

      <input type="text" v-model="searchQuery"/>
       <button @click="onChangeCategory">Search</button> 
    </div>

    <div class="container">
      <div v-for="product in computed_items" :key="product.id">
        <ProductListCom>
          <template v-slot:image>
            <router-link :to="{ name: 'product', params: { id: product.id } }">
              <img v-bind:src="product.image" />
            </router-link>
          </template>

          <template v-slot:title>
            {{ product.title }} {{ product.category }}
          </template>

          <template v-slot:price>
            <small>{{ "$" + product.price }}</small>
          </template>

          <template v-slot:action>
            <button class="btn-primary" @click="addToWishlist(product)">
              Wishlist
            </button>
            <button class="btn-primary" @click="addToCart(product)">
              Add to Cart
            </button>
          </template>
        </ProductListCom>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductListCom from "../../components/product/ProductListCom.vue";
//import DropdownComponent from "../../components/dropdown/DropdownComponent.vue"
export default {
  name: "ProductListView",
  components: {
    ProductListCom,
    // DropdownComponent
  },
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
    };
  },
  mounted() {
    this.selectedCategory = this.$route.query?.category ?? "";
    this.searchQuery = this.$route.query?.search ?? "";
    // if(this.$route.query.category) {
    //   this.selectedCategory =  this.$route.query.category !== '' ? this.$route.query.category : ''
    // }
    this.$store.dispatch("shop");
    this.$store.dispatch("category");

    console.log(this.$route);
  },
  computed: {
    ...mapState(["products", "categories"]),
    ...mapGetters(["getProducts", "getCategories"]),
    ...mapGetters({
      products: "allProducts",
      length: "getNumberOfProducts",
    }),

    computed_items: function () {
      let filterProd = this.getProducts
      if (!this.selectedCategory && !this.searchQuery){ 
        return filterProd
      }
      if(this.selectedCategory) {
        filterProd = filterProd.filter(({ category }) => category === this.selectedCategory)
      }
      if (this.searchQuery) {
        filterProd = filterProd.filter(({ title }) => title.toLowerCase().includes(this.searchQuery));
      }
      return filterProd
     }
    },
    methods: {
      ...mapActions(["addToCart"]),
      addToWishlist(product) {
        if (localStorage.getItem("currentUser")) {
          // this.$router.push("/wishlist")
          this.$store.dispatch("addToWishlist", product);
        } else {
          this.$router.push("/signin");
        }
      },
      onChangeCategory() {
        console.log("jj", this.selectedCategory);
        this.$router.replace({ query: { category: this.selectedCategory, search: this.searchQuery  }} );
      },  
    },
};
</script>

<style  scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: left;
  margin: 10px;
}
.btn {
  width: 182px;
  font-size: 14px;
  color: #fff;
  background-color: #008cba;
  border-color: lightblue;
  padding: 8px;
}

.content {
  border: 1px solid lightblue;
  width: 180px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 20px;
}

.category-drop {
  float: right;
}
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
}

.btn-primary {
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
a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

img {
  max-width: 80%;
  max-height: 80%;
}

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #0a0a0a;
  border-radius: 6px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ad8225;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ad8225;
  border-left: 1px solid #ad8225;
  border-bottom: 1px solid #ad8225;
  position: absolute;
  background-color: #0a0a0a;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ad8225;
}

.selectHide {
  display: none;
}
</style>