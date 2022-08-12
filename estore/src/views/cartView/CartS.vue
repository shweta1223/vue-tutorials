<template>
  <div>
    <div class="table">
      <div class="”Header”">
        <h3 class="”Heading”">Shopping Cart --  {{totalItems}}</h3>
      </div>

      <div class="layout-inline row th">
        <div class="col col-pro">Product</div>
        <div class="col col-qty align-center">QTY</div>
        <div class="col col-price align-center">Price</div>
        <div class="col col-price align-center">Remove</div>
      </div>
    </div>
      <div v-for="p in products" :key="p.id">
    <TheCart>
        <template v-slot:image>
          <img  :src="p.image"/>
        </template>

        <template v-slot:title>
          {{ p.title }} 
        </template>

        <template v-slot:qty>
           <button @click="decrementCount">-</button>
             {{getCount}}
           <button @click="incrementCount">+</button>
        </template>

        <template v-slot:price>
            {{ '$' + p.price }} 
        </template>

         <template v-slot:delete>
            <button @click="removeItem(p)">Remove</button>
        </template>

    </TheCart>
      </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import TheCart from "../../components/cart/TheCart.vue";
export default {
  name: "CartS",
  components: {
     TheCart,
  },
  
   computed: {
    ...mapGetters(["getCount","cartTotal"]),
    ...mapGetters({
      products: 'allProducts',
      totalItems: 'getNumberOfProducts',
    }),
  },
  methods: {  
     removeItem(product) {
      this.$store.dispatch("removeItem", product);
    },
     ...mapActions(["incrementCount", "decrementCount","cartQuantity"]),
     
     
  }
  
};
</script>

<style  scoped>

button{
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

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}



.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.layout-inline > * {
  display: inline-block;
}

.align-center {
  text-align: center;
}

.th {
  background: #008CBA;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
}

.tf {
  background: #008CBA;
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
  width: 44%;
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
  width: 20%;
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


.delete{
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
    width: 22%;
  }

  img {
    max-width: 100%;
    margin-bottom: 1em;
  }
}

@media screen and (max-width: 591px) {
}
</style>