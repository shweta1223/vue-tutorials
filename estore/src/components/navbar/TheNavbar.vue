<template>
  <div class="menu">
      <div class="menu-link">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to='shop'>Shop</router-link> |
      <router-link to="/cart">Cart ({{totalItems}})</router-link> |
       <router-link to="/wishlist">Wishlist({{totalItemswish}})</router-link>  |
       
        <div v-if="currentUser" class="CurrentName">
            {{currentUser.firstname}}
            <button @click="logoutUser">Logout</button> 
        </div>
      
       <div v-else>
          <router-link to="/signIn">Login</router-link> 
       </div>
       
        
    </nav>
      </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";

export default {
  name: "TheNavbar",
  data() {
    return {
    };
  },
  components: {
    
  },
  mounted(){
     console.log(this.$route.query.categories);
  },
  computed: {
     ...mapState(["categories"]),
    ...mapGetters({
      currentUser: 'getCurrentUser',
    }),
    ...mapGetters({
      totalItems: 'getNumberOfProducts',
    }),
     ...mapGetters({
      totalItemswish: 'getNumberOfProductsWish',
    }),
      ...mapGetters(["getCategories"]),
  },
  methods:{
    logoutUser(){
      this.$store.dispatch("logout")
    }
  }
};
</script>

<style>

nav {
  display: flex;
  padding: 30px;
  justify-content: space-evenly;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>