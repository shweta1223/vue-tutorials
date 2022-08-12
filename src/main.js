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

import UserForm from "./components/practical4/UserForm/UserForm"
import MyTextInput from "./components/practical4/BaseComponent/MyTextInput";
import MyRadio from "./components/practical4/BaseComponent/MyRadio"
import MyButton from "./components/practical4/BaseComponent/MyButton";
import DisplayUser from "./components/practical4/UserForm/DisplayUser"
// import UserList from "./components/practical4/UserForm/UserList"


Vue.component("my-textInput", MyTextInput);
Vue.component("my-button", MyButton);
Vue.component("user-form", UserForm);
Vue.component("my-radio", MyRadio);
Vue.component("display-user", DisplayUser);
// Vue.component("user-list", UserList);


/* --------------Global Filter ------------------  */

Vue.filter("capitalize", function (value) {
  
  if (value) {
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  } else {
      return value.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
   // return value.charAt().toUpperCase() + value.slice(1)
  } 
 
});


/* --------------Router------------------  */
import VueRouter from "vue-router";
import UserList from './components/practical5/users/UserList.vue'
import PostsList from './components/practical5/posts/PostList.vue'
import UserMember from './components/practical5/users/UserMember.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  //Dynamic Route Matching 
  
  { 
    path:'/users',
    component: UserList ,
   
  }, 
  { 
    path:'/users/:userId',
    component: UserMember ,
   
  }, 
  { 
    path:'/posts',
    component: PostsList ,
   
  }, 
  ]

const router = new VueRouter({
  mode: "history",
  //base:'https://jsonplaceholder.typicode.com/',
  routes,
});

//  axios.defaults.baseURL = '';

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
