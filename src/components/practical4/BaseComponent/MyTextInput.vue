<template>
  <div>
    <div class="row">
      <div class="col-25">
        <h2 class="label">{{ label }}</h2>
      </div>
      <div class="col-75">
        <input
          type="text"
          :value="value"
          :placeholder="placeholder"
          class="inputfield"
          :name="name"
          :label="label"
          :error="error"
          @input="$emit('input', $event.target.value)"
          @keypress="$emit('keypress', $event)"
          @focus="$emit('focus', $event)"
        />
        <p class="error">{{error}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTextInput",
  data() {
    return {};
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
    name: {
      type: String,
      required: false,
      default: "",
    },
    error: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.inputClass {
  width: 100%;
  padding: 8px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #84613d;
  border-radius: 4px;
}

.inputfield {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
}
.error{
  color: red;
}

input[type="radio"] {
  /* margin: 12px; */
}

.label {
  font-size: 14px;
  float: left;
  margin-top: 25px;
  font-weight: 600;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-25 > label {
  float: right;
  font-weight: 600;
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .col-25 > label {
    float: left;
  }
}

.col-75 {
  float: left;
  width: 75%;
  /* margin-top: 6px; */
}
</style>
