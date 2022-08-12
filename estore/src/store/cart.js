export default {
  state: () => ({
    count:0,
    cart: [],
  }),

  getters: {
    allProducts: (state) => state.cart, // would need action/mutation if data fetched async
    getNumberOfProducts: (state) => state.cart.length || 0,

    getCount(state) {
      return state.count;
    },

  //  cartTotal: state => {
  //   return state.cart.reduce((acc, cart) => {
  //     return (this.count * cart.price) + acc;
  //   }, 0).toFixed(2);
  // },
 
  // cartQuantity: state => {
  //   return state.cart.reduce((acc, cart) => {
  //     return cart.quantity + acc;
  //   }, 0);
  // }
  },

  mutations: {
    INCREMENT_COUNT(state) {
      if(state.count >= 10)
       state.count = state.count += 1;
    
    },
    DECREMENT_COUNT(state) {
      state.count = state.count -= 1;
    },
    ADD_TO_CART(state, product) {
      const record = state.cart.find((p) => p.id === product.id);
      if (!record) {
        state.cart.push(product);
      } else{
        record.quantity++;
      }
    },
    REMOVE_ITEM(state, product) {
       state.cart = state.cart.filter(p => {
          return p.id !== product.id
       })
    }
  },
  actions: {
    incrementCount({ commit }) {
      console.log("INCREMENT_COUNT");
      commit("INCREMENT_COUNT");
    },
    decrementCount({ commit }) {
      console.log("DECREMENT_COUNT");
      commit("DECREMENT_COUNT");
    },
    addToCart({ commit }, product) {
     
      commit("ADD_TO_CART", product);
    },
    removeItem(context, product) {
      context.commit("REMOVE_ITEM", product);
      
    },
  },
};
