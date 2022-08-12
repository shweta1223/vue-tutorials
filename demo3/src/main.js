import Vue from "vue";
import App from "./App.vue";
import axios from "vue-axios";
import VueAxios from "vue-axios";
//import "bootstrap-vue";

//import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

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