<template>
<div>
<sidebar>
  <div class="card">
  <form>
    <div class="imgcontainer">
       <h2>Login</h2>
    </div>
    <div class="container">
        <div class="box">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" v-model="loginInfo.email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="loginInfo.password"  required>

     
         <button type="button" @click="loginUser">Login</button>
     
      </div>
    </div>
  </form>
  </div>

</sidebar>
 
<!--   
     <h2 v-for="user in userlist" :key="user.id">
        {{user.email}} {{user.password}}
         <button type="submit" @click="loginUser(user)">Login</button>
      </h2> -->

  </div>
  

      
</template>
<script>
// import { mapGetters, mapState } from "vuex";
import sidebar from "../../components/sidebar/SidebarComponent.vue"
export default {
  name:"SignIn",
  components:{
    sidebar
  },
  data() {
    return {
      loginInfo:{
        email:"",
        password:""
      }
    }
  },
  methods:{
    // loginUser(user){
    //   this.$store.dispatch("loginUser", user)
    // }
  async loginUser(){
     let user = await this.$store.dispatch("loginUser", this.loginInfo)
      if(user){
        this.$router.push('/shop')
      } else {
        alert("Something went wrong!")
      }
    }
  }
};
</script>
<style scoped>

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}


/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

.container {
  padding: 16px;
  margin: 25px;
}


</style>