<template>
  <ul>
      <UserItem
      v-for="user in users" :key="user.id"
      :id="user.id"
      :name="user.name"
      :username="user.username"
      :email="user.email"
      :phone="user.phone"
      :website="user.website"
      :company="user.company.name"
      :address="user.address.city"
    ></UserItem>
    
  </ul>
</template>

<script>
import UserMixin from "../../../mixins/userminin";
import UserItem from './UserItems.vue';

export default {
  components: {
    UserItem,
  },
  mixins: [UserMixin],


};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>