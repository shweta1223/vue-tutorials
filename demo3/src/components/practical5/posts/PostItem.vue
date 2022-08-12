<template>
 <div>
    <div class="wrapper">
      <h3>Article</h3>
        <h4>{{ title | capitalize }}</h4>
        <hr />
        <p>
          <span>Description: {{ body | capitalize }}</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
     body: {
      type: String,
    }
  },
};
</script>

<style scoped>
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

hr {
  height: 2px;
  border-width: 0;
  color: gray;
  background-color: red;
}
</style>