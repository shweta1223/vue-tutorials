import Vue from "vue";
import App from "./App.vue";
import axios from "vue-axios";
import VueAxios from "vue-axios";
import "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

/*------------- Practical One and Two -------------*/

import SearchUser from "./components/practical1_2/SearchUser";
import DetailDisplay from "./components/practical1_2/DetailDisplay";
import ModelVue from "./components/practical1_2/ModelVue";

Vue.component("search-user", SearchUser);
Vue.component("detail-display", DetailDisplay);
Vue.component("model-vue", ModelVue);

/*------------- Practical Three -------------*/

import ButtonConditionComponent from "./components/practical3/ButtonConditionComponent";
import SimpleComponent from "./components/practical3/SimpleComponent";
import SlotComponent from "./components/practical3/SlotComponent";

Vue.component("buttonConditional-component", ButtonConditionComponent);
Vue.component("simple-component", SimpleComponent);
Vue.component("shot-component", SlotComponent);

/*------------- Practical Four -------------*/

import UserForm from "./components/practical4/UserForm/UserForm";
import MyTextInput from "./components/practical4/BaseComponent/MyTextInput";
import MyRadio from "./components/practical4/BaseComponent/MyRadio";
import MyButton from "./components/practical4/BaseComponent/MyButton";
import DisplayUser from "./components/practical4/UserForm/DisplayUser";
import UserList from "./components/practical4/UserForm/UserList";

Vue.component("my-textInput", MyTextInput);
Vue.component("my-button", MyButton);
Vue.component("user-form", UserForm);
Vue.component("my-radio", MyRadio);
Vue.component("display-user", DisplayUser);
Vue.component("user-list", UserList);

/* --------------Global Filter ------------------  */

Vue.filter("capitalize", function (value) {
  
 
 
  var arr = ["A", "D", "F", "P", "M"];

  const newvalue = value[0].toUpperCase();

  if(arr.includes(newvalue)) {
    return value.toUpperCase()
  } else {
    return value
  }


  
  // else {
  //   var arr = ["A", "D", "F", "P", "M"];
  //   const value = arr.includes("A") || arr.includes("D") || arr.includes('F') || arr.includes('P') || arr.includes('M') ;
  //   return value.toUpperCase();
  // }
});

/* --------------Router------------------  */
import VueRouter from "vue-router";
import HomeView from "./components/practical5/HomeView";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  //Dynamic Route Matching
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/user/:id",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "userpost" */ "./views/UserView.vue"),
    // children: [
    //   {
    //     path: 'post',
    //     component: () => import(/* webpackChunkName: "post" */ './views/UserPostView.vue')
    //   },
    // ]
  },
  {
    path: "/post/:id",
    name: "post",
    component: () =>
      import(/* webpackChunkName: "post" */ "./views/UserPostView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base:process.env.BASE_URL,
  routes,
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
