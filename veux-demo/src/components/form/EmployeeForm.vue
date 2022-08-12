<template>
  <div>
    <h2>Employee</h2>

    <div class="employee-box">
      <form @submit.prevent="submitForm">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Your title.."
          v-model="form.title"
        />
        <p v-if="!titleIsValid" class="error">The Title is required</p>

        <label for="hobbies">Hobbies</label>
        <input
          type="checkbox"
          id="hobbies"
          name="reading"
          value="reading"
          v-model="form.hobbies"
        /><span>Reading</span>
        <input
          type="checkbox"
          id="hobbies"
          name="warting"
          value="writing"
          v-model="form.hobbies"
        /><span>Writing</span>
        <p v-if="!hobbiesIsValid" class="error">The Hobbies is required</p>
        <br />

        <label for="gender">Gender</label>
        <div class="row">
          <input
            type="radio"
            id="gender"
            name="reading"
            v-model="form.gender"
            value="Male"
          />Male
          <input
            type="radio"
            id="gender"
            name="writing"
            value="Female"
            v-model="form.gender"
          />Female
        </div>

        <br />

        <label for="content">Content</label>
        <textarea
          id="content"
          name="content"
          placeholder="Your content.."
          v-model="form.content"
        />
        <p v-if="!contentIsValid" class="error">The Hobbies is required</p>

        <h6>{{ getForm }}</h6>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterComponents",
  data() {
    return {
      form: {
        title: "",
        content: "",
        hobbies: [],
        gender: "Male",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.formIsValid) {
        this.$store.dispatch("submitForm", this.form);
      } else {
        console.log("Invalid Form");
      }
    },
  },
  computed: {
    getForm() {
      return this.$store.getters.getForm;
    },

    titleIsValid() {
      return !!this.form.title;
    },
    hobbiesIsValid() {
      return !!this.form.hobbies;
    },
    contentIsValid() {
      return !!this.form.content;
    },
    formIsValid() {
      return this.titleIsValid && this.hobbiesIsValid && this.contentIsValid;
    },
  },
};
</script>

<style scoped>
.employee-box {
  position: absolute;
  top: 55%;
  left: 50%;
  width: 600px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: lightgray;
  border-radius: 10px;
}

label {
  float: left;
}

input[type="text"],
[type="radio"],
[type="checkbox"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

div {
  padding: 20px;
}

.error {
  color: red;
}

.col-50 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
</style>
