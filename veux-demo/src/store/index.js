import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    initialCount: 5,
    form: [],
    users: [],
    posts: [],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getInitialCount(state) {
      return state.initialCount;
    },
    getForm(state) {
      return state.form;
    },
    getUsers(state) {
      return state.users;
    },
    getPost(state) {
      return state.posts;
    },
  },

  mutations: {
    INCREMENT_COUNT(state) {
      console.log(state.count);
      state.count = state.count + state.initialCount;
    },
    DECREMENT_COUNT(state) {
      state.count = state.count - state.initialCount;
    },
    RESET_COUNT(state) {
      state.count = state.initialCount;
    },
    SUBMIT_FORM(state, payload) {
      state.form.push(payload);
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
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
    resetCount({ commit }) {
      console.log("RESET_COUNT");
      commit("RESET_COUNT");
    },
    submitForm({ commit }, payload) {
      console.log("SUBMIT_FORM", payload);
      commit("SUBMIT_FORM", payload);
    },
    async userList({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          commit("SET_USERS", response);
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
    async userPostList({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          commit("SET_POSTS", response);
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
  },
});
