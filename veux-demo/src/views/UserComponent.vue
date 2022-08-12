<template>
  <div>
    <UserView />
  </div>
</template>

<script>
import UserView from "../components/users/UserView";

export default {
  components: {
    UserView,
  },
  name: "HomeView",
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
