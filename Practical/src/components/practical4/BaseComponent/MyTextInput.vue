<template>
  <div>
    <h2 class="label">{{label}}</h2>
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      class="inputClass"
      :name="name"
      :label="label"
      :error="error"
      @input="$emit('input', $event.target.value)"
      @keypress="$emit('keypress', $event)"
      @focus="$emit('focus', $event)"
    />
    <p class="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: "MyTextInput",
  data() {
    return {
    };
  },
   props: {
        value: {
          type: [String, Number],
          required: false,
          default: "",
        },
        label: {
          type: String,
          required: false,
          default: "",
        },
        placeholder: {
          type: String,
          required: false,
          default: "",
        },
        name:{
            type:String,
            required:false,
            default:"",
        },
        error:{
            type:String,
            required:false,
            default:"",
        },
        
      },
};
</script>

<style  scoped>
.inputClass{
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #84613D;
  border-radius: 4px;
}

.label{
    font-size: 14px;
    float: left;
    margin-top: 25px;
    font-weight: 600;
}

.error{
    color:red;
    float: left;
}
</style>