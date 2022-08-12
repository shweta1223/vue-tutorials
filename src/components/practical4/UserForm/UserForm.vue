<template>
<div class="employees">
    <div class="main-title">
      <p>User Registration</p>
    </div>

    <div class="container">
      <div class="card">
        <div class="sub-title">
          <p>Add Users</p>
        </div>

      <form @submit.prevent="submit">
        <div  class="form-details">
        <my-textInput
          placeholder="Enter your name "
          name="name"
          id="name"
          label="Name:"
          v-model="users.name"
        />
        <div class="row">
        <p class="col-75" v-if="!lnameIsValid">
          The Last name field is required
        </p>
        </div>

        <my-radio
          v-model="users.gender"
          :options="options"
          label="Gender:"
          @input="inputEventHandler"
        />

       
        <my-textInput
          placeholder="Enter your email "
          name="email"
          label="Email:"
          v-model="users.email"
        />

         <div class="row">
        <p class="col-75" v-if="!lnameIsValid">
          The Last name field is required
        </p>
         <p v-else-if="!emailIsValid" class="error">
          The Email field is not valid
        </p>
        </div>

       
        <my-textInput
          placeholder="Enter your age     "
          name="age"
          label="Age:"
          v-model.number="users.age"
          id="ID"
          @keypress="NumbersOnly"
        />
         <div class="row">
        <p class="col-75" v-if="!ageRequired">
         The Age field is required
        </p>
         <p v-else-if="!ageIsValid" class="error">
          The Email field is not valid
        </p>
        </div>

         <my-textInput
          placeholder="Enter your Phone"
          name="phone"
          label="Phone:"
          v-model.number="users.phone"
          id="ID"
          @keypress="NumbersOnly"
        />
         <div class="row">
        <p class="col-75" v-if="!ageRequired">
         The phone field is required
        </p>
         <p v-else-if="!ageIsValid" class="error">
          The Email field is not valid
        </p>
        </div>
        
      
        <my-button type="submit">Save</my-button>
        </div>
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
        Nxame: "",
        phone: "",
        email: "",
        age: "",
        gender: "Male",
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

.main-title {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  border-radius: 5px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 60%;
}

.sub-title {
  font-size: 14px;
  padding: 2px 12px;
  background-color: #3f90ce;
  color: white;
  font-family: "Open Sans", sans-serif;
  border-radius: 4px;
}

.form-details {
  padding: 12px;
}

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

.radio-button-group {
  display: flex;
  justify-content: space-between;
}

.col-75 {
  float: right;
  width: 75%;
  color: red;
}

</style>