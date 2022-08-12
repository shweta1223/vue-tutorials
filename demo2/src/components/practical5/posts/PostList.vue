<template>
<div>
  <ul>
    <post-item  v-for="post in posts" 
    :key="post.id"
    :title="post.title" 
    :body="post.body">
    </post-item>
  </ul>
  </div>  
</template>

<script>
import UserMixin from "../../../mixins/userminin";
import PostItem from "../posts/PostItem.vue";

export default {
  mixins: [UserMixin],
  components: {
    PostItem,
  },
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>