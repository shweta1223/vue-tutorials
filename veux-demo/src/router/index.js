import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/CounterView.vue"),
  },
  {
    path: "/employeeForm",
    name: "employeeForm",
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/EmployeeView.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () =>
      import(
        /* webpackChunkName: "userpost" */ "../components/users/UserView.vue"
      ),
  },
  {
    path: "/post/:id",
    name: "post",
    component: () =>
      import(
        /* webpackChunkName: "post" */ "../components/users/UserPostView.vue"
      ),
  },

  {
    path: "/userCom",
    name: "userCom",
    component: () =>
      import(/* webpackChunkName: "userCom" */ "../views/UserComponent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
