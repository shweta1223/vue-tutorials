import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/productView/Shop'
import Product from '../views/productView/Product'
import CartS from "../views/cartView/CartS"
import WishlistS from "../views/wishlistView/WishlistS"
import SignIn from "../views/Auth/SignIn.vue"
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
    path: '/shop',
    name: 'shop',
    component:Shop
  },
  {
    path: '/product/:id',
    name: 'product',
    component:Product
  },
  {
    path: '/cart',
    name: 'cart',
    component:CartS
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component:WishlistS,
    
  },
  {
    path: '/signIn',
    name: 'signIn',
    component:SignIn
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
    next();
  
} );


export default router
