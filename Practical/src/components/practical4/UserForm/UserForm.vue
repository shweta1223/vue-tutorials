<template>
<div>
  <div class="flex-container">
    <div class="card">
      <h2 class="title">Vue Form</h2>

      <form @submit.prevent="submit">
        <my-textInput
          placeholder="Enter your first name "
          name="fname"
          id="fname"
          label="First Name:"
          v-model="users.fname"
        />
        <p v-if="!fnameIsValid" class="error">
          The First name field is required
        </p>

        <my-textInput
          placeholder="Enter your last name "
          name="lname"
          label="Last Name:"
          v-model="users.lname"
        />
        <p v-if="!lnameIsValid" class="error">
          The Last name field is required
        </p>

        <my-textInput
          placeholder="Enter your email "
          name="email"
          label="Email:"
          v-model="users.email"
        />
        <p v-if="!emailRequired" class="error">The Email field is required</p>
        <p v-else-if="!emailIsValid" class="error">
          The Email field is not valid
        </p>

        <my-textInput
          placeholder="Enter your age     "
          name="age"
          label="Age:"
          v-model.number="users.age"
          id="ID"
          @keypress="NumbersOnly"
        />
        <p v-if="!ageRequired" class="error">The Age field is required</p>
        <p v-else-if="!ageIsValid" class="error">
          The Age should be in between 12 to 120
        </p>

        <my-radio
          v-model="users.gender"
          :options="options"
          label="Gender:"
          :checked="gender == 'Male'"
          @change="inputEventHandler"
        />
        <my-button type="submit">Save</my-button>
      </form>
    </div>
  </div>
   <display-user :userss="userList"/>
</div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      users: {
        fname: "",
        lname: "",
        email: "",
        age: "",
        gender: "",
      },
      userList: [],
      options: ["Male", "Female"],
    };
  },
  computed: {
    fnameIsValid() {
      return !!this.users.fname;
    },
    lnameIsValid() {
      return !!this.users.lname;
    },
    emailRequired() {
      return !!this.users.email;
    },
    emailIsValid() {
      return !!this.validEmail(this.users.email);
    },
    ageRequired() {
      return !!this.users.age;
    },
    ageIsValid() {
      return (
        typeof this.users.age === "number" &&
        this.users.age >= 12 &&
        this.users.age <= 120
      );
    },
    formIsValid() {
      return (
        this.fnameIsValid &&
        this.lnameIsValid &&
        this.emailRequired &&
        this.emailIsValid &&
        this.ageIsValid &&
        this.ageRequired
      );
    },
  },
  mounted(){
				this.checkedValue = "1";
			},
  methods: {
    inputEventHandler(value) {
      this.$emit("input", value);
      console.log(value);
    },
    submit() {
      if (this.formIsValid) {
        //this.$emit("submit", this.users);
        console.log(this.userList, this.users.email)
        const filterEmail = this.userList.find(x => x.email === this.users.email);
        if(!filterEmail) {
          this.userList.push(this.users)
        } else {
          console.log('Has email')
        }
        console.log(filterEmail);
      } else {
        console.log("Invalid Form");
      }
   
      
      // this.$emit("add:users", this.users);
    
    },
    

    validEmail: function (email) {
      var userEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return userEmail.test(email);
    },
    NumbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>

<style  scoped>
.title {
  background: #84613d;
  color: #fdf9ea;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 0.5rem;
  width: 30%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  color: #84613d;
  font-family: "Lucida Console", Monaco, monospace;
  background: #fdf9ea;
  border-bottom: 1px solid #f9f2d6;
  border-right: 1px solid #f9f2d6;
}

.radio-button-group {
  display: flex;
  justify-content: space-between;
}

.error {
  color: red;
}
</style>