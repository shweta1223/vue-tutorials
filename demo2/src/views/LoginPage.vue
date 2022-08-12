<template>
    <div class="login">
       <h2>Login Page</h2>
       <div class="form">
           <label for="username">Username</label>
           <input type="text" name="username" class="input" v-model="username">
            <label for="password">Password</label>
           <input type="password" name="username" class="input" v-model="password">
           <button class="btn" @click="login">Login</button>
       </div>
    </div>
</template>

<script>
import  store from "../store/index"
    export default {
        name:"LoginPage",
        data() {
            return {
                username:"",
                password:""
            }
        },
        methods:{
            login(){
                store.user = this.username
                this.$router.push("/user")
                //Authenticate against API
            }
        }
    }
</script>

<style  scoped>
.form{
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}
</style>