<template>
    <div class="login">
       <h2>Login Page</h2>
       <div class="form">
           <label for="username">Username</label>
           <input type="text" name="username" class="input" v-model="username">
            <label for="password">Password</label>
           <input type="password" name="username" class="input" v-model="username">
           <button class="btn" @click="login">Login</button>
       </div>
    </div>
</template>

<script>
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
                //Authenticate against API
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>