<template>
  <section>
    <h2>{{ name }}</h2>
    <ul>
    <post-item  v-for="post in posts" 
    :key="post.id"
    :title="post.title" 
    :body="post.body">
    </post-item>
    </ul>
  </section>
</template>

<script>
import PostItem from '../posts/PostItem.vue';
import UserMixin from "../../../mixins/userminin";
export default {
  
  components: {
    PostItem
  },
  mixins: [UserMixin],
  data() {
    return {
       name:'',
    };
  },
  watch:{
    users(n,v) {
      console.log(n,v)
      const userId = this.$route.params.userId;
      let selectedUser = n.filter(user => user.id === Number(userId));
      let selectedPost = this.posts.find(post => post.id === Number(userId));
      console.log(selectedUser)
      selectedUser.push(selectedPost)
    }
  },
  mounted (){    
    console.log(this.users)
    
 
  }
    
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>s