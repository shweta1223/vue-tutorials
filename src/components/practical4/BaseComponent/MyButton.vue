<template>
  <div>
     <div class="row">
            <div class="col-25">
            </div>
            <div class="col-75">
                 <button class="button">
                   <slot></slot>
                   </button>
            </div>
          </div>
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

.button {
    background-color: #3f90ce;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: #72bb75;
  }
</style>