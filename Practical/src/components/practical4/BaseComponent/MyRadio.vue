<template>
  <div>
    <h2 class="label">{{label}}</h2>
   <label :for="option" v-for="option in options" :key="option">
    <input type="radio" name="radio-input" :value="option" 
      :id="option" 
      @change="$emit('input', option)" />
    {{ option }}
   </label>
  </div>
</template>

<script>
export default {
  name: "MyRadio",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: {
      required: true,
      type: Array,
      },
     label: {
          type: String,
          required: false,
          default: "",
        },
  },
};
</script>

<style scoped>
.radio-button-group {
  width: 60%;
  margin: 20px auto;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
}

.label{
    font-size: 15px;
    float: left;
    margin-top: 25px;
    font-weight: 600;
}
</style>