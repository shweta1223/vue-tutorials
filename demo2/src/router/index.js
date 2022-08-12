import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path:"/user",
    name:"user",
    component: () => import(/*WebpackChunkName:"User" */ "../views/UserCom.vue"),
    meta:{requiresAuth :true}
  },
  {
    path:"/login",
    name:"login",
    component: () => import(/*WebpackChunkName:"Login" */ "../views/LoginPage.vue"),
  
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
     if(!store.user){
       next({
        name:"login"
       });
     }else{
      next();
     }
  }else{
    next();
  }
} );

export default router
