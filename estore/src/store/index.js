import Vue from 'vue'
import Vuex from 'vuex'
 import Product from './product'
 import Cart from "./cart"
 import Wishlist from "./wishlist"
 import User from "./user"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
   Product,
   Cart,
   Wishlist,
   User
  }
})
