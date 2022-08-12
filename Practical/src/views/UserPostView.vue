<template>
    <div>
        <div class="wrapper">
        <h3>Article {{title}}</h3>
        <div 
        v-bind:class="isCard && 'card'"
         v-for="post in posts" 
         :key="post.id"
        >
        <h4>{{post.id}} -- {{ post.title  | capitalize }}</h4>
        <hr>
         <p><span>Description:  {{ post.body  | capitalize }}</span></p></div>
         <button class="routeBtn">
            <!-- <router-link :to="`/post/${post.id}`">OK</router-link> -->
               <router-link to="/post">OK</router-link>
          </button>
    </div>
    </div>
</template>

<script>
import UserMixin from "../mixins/userminin"
    export default {
        name:"HomeView",
        components:{},
        data() {
            return {
                title: ''
            }
        },
        mixins:[UserMixin],
        beforeRouteEnter(to, from, next) {
            console.log(to, from)
            next(vm => {
                vm.title = 'SS'
            })
        },
        mounted () {
            console.log(this.$route)
        },
        props: ['id']
    }
</script>

<style  scoped>

.card {
  background-color: #fff;
  box-shadow: 0px 20px 30px -30px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 30px;
  display: inline-block;
  width: 32%;
  margin-right: 1.3%;
  margin-bottom: 30px;
  vertical-align: middle;
  transition: 0.2s all;
}

hr{
    height:2px;
    border-width:0;
    color:gray;
    background-color:red
}
</style>