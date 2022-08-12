

export default {
    state: () => ({
      wishlist: [],
    }),
  
    getters: {
      allProductsWish: (state) => state.wishlist, // would need action/mutation if data fetched async
      getNumberOfProductsWish: (state) => state.wishlist.length || 0
    },
  
    mutations: {
      ADD_TO_WISHLIST(state, payload) {
        const record = state.wishlist.find((p) => p.id === payload.id);
  
        if (!record) {
          state.wishlist.push(payload);
        } else {
          record.quantity++;
        }
      },
      REMOVE_ITEM_WISHLIST(state, id) {
        state.wishlist = state.wishlist.filter(p => {
          return parseInt(p.id) !== parseInt(id)
       })
      }
    },
    actions: {
      addToWishlist({ commit }, product) {
        //console.log(this.$route);
        commit("ADD_TO_WISHLIST", product);
      },
      removeFromWishlist(context, id) {
        context.commit("REMOVE_ITEM_WISHLIST", id);
      },
    },
  };
  