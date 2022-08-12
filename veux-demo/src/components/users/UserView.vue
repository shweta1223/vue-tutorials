<template>
  <div>
    <div>
      <h3 class="userStyle">User Details</h3>
      <div v-bind:class="isCard && 'card'" v-for="user in users" :key="user.id">
        <h5 v-randomColor>{{ user.name }}</h5>
        <hr />
        <div class="userDetails">
          <p><span class="title"> User Id --</span> {{ user.id }}</p>
          <p><span class="title"> Username --</span> {{ user.username }}</p>
          <p><span class="title"> Email --</span> {{ user.email }}</p>
          <p><span class="title"> Phone -- </span>{{ user.phone }}</p>
          <p><span class="title"> Website -- </span> {{ user.website }}</p>
          <p><span class="title"> Company --</span> {{ user.company.name }}</p>
          <p><span class="title"> Address --</span> {{ user.address.city }}</p>
        </div>
        <router-link
          :to="{ name: 'post', params: { id: user.id }, props: true }"
          >Article</router-link
        >
        <!-- <router-link to="/user/">Article</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("userList");
  },
  computed: {
    ...mapState(["users"]),
  },
  directives: {
    randomColor: {
      bind: function (el) {
        el.style.color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
        console.log(el);
      },
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 30px;
  display: inline-block;
  width: 32%;
  margin-right: 1.3%;
  margin-bottom: 30px;
  vertical-align: middle;
  transition: 0.2s all;
}
.card:hover {
  transform: scale(1.03);
}

h3 {
  margin-bottom: 50px;
  color: rgb(25, 124, 119);
}

.title {
  float: left;
  font-weight: 600;
}

hr {
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: gray;
}

button {
  background-color: rgb(25, 124, 119);
  border: none;
  color: white;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: rgb(4, 196, 186);
  color: white;
}
</style>
