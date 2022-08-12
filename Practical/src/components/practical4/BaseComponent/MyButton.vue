<template>
  <div>
    <button class="button">
        <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
    };
  },
};
</script>

<style  scoped>

.button{
background-color: #84613D; /* Green */
  border: none;
  color: #FDF9EA;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  border-radius: 7px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>