
export default {
    state: () =>({
       users:[],
       currentUser: null
    }),
    getters: {
       getUsers: (state) => state.users,
       getCurrentUser:(state) => state.currentUser || null
      
    },
  
    mutations: {
      SET_USER(state,payload){
        state.users = payload
      },
      LOGOUT_USER(state){
        state.currentUser = null
        window.localStorage.removeItem('currentUser')
      },
      SET_CURRENT_USER(state,user){
        state.currentUser = user;
        window.localStorage.currentUser =JSON.stringify(user);
      }
    },
    actions: {
      logout ({commit}) {
        commit('LOGOUT_USER')
      },
      async loginUser({commit}, loginInfo){
        return await fetch('https://fakestoreapi.com/users', loginInfo)
          .then((res) => res.json())
          .then((response) => {
            if(response && response.length) {
              let currentUser = response.find(use => use.email === loginInfo.email && use.password === loginInfo.password)
              if(currentUser) {
                commit("SET_CURRENT_USER", currentUser); //m38rmF$
                return true
              } else {
                return false
              }
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }
    }
  };
  