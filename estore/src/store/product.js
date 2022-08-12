
export default {
  state: () =>({
     products:[],
     product: {},
     categories:[],
  }),
  getters: {
     getProducts: (state) => state.products,
     getProduct: (state) => state.product,
     getCategories: (state) => state.categories
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      //console.log(payload);
      state.products = payload;
    },
    SET_PRODUCT(state, payload) {
      //console.log(payload);
      state.product = payload;
    },
    SET_CATEGORY(state, payload) {
      //  console.log(payload);
      state.categories = payload;
    },
  },
  actions: {
    shop({commit}){
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          commit("SET_PRODUCTS", response);
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
    product({commit}, payload){
      fetch(`https://fakestoreapi.com/products/${payload}`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          commit("SET_PRODUCT", response);
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
    category({commit}){
      fetch(`https://fakestoreapi.com/products/categories`)
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          commit("SET_CATEGORY", response);
        })
        .catch((e) => {
          throw new Error(e);
        });
    }
  },
};
