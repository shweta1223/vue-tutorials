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

        <form action="" @submit.prevent="submit">
          <div class="form-details">
            <div class="row">
              <div class="col-25">
                <label for="name">First Name:<span>*</span></label>
              </div>
              <div class="col-75">
                <input
                  placeholder="Enter your first name "
                  name="fname"
                  id="fname"
                  class="inputfield"
                  type="text"
                  v-model="users.fname"
                  onkeypress="nameValid()"
                />
                <span id="name-err" v-if="!nameValid" style="color: red"></span>
              </div>

              <div class="col-25">
                <label for="name">Last Name:<span>*</span></label>
              </div>
              <div class="col-75">
                <input
                  placeholder="Enter your last name "
                  name="fname"
                  id="fname"
                  class="inputfield"
                  type="text"
                  v-model="users.lname"
                  onkeypress="nameValid()"
                />
                <span id="name-err" v-if="!nameValid" style="color: red"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="lname">Gender:<span>*</span></label>
              </div>
              <div class="col-75">
                <input
                  type="radio"
                  class="gender"
                  id="male"
                  value="Male"
                  name="gender"
                  v-model="users.gender"
                /><label>Male</label>
                <input
                  type="radio"
                  class="gender"
                  id="female"
                  value="Female"
                  name="gender"
                  v-model="users.gender"
                  placeholder="Your last name.."
                /><label>Female</label>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="age">Age:<span>*</span></label>
              </div>
              <div class="col-75">
                <input
                  class="inputfield"
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Enter your age "
                  v-model="users.age"
                  onkeypress="ageEnter()"
                />
                 <span id="age-err" style="color: red"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="fname">Email:<span>*</span></label>
              </div>
              <div class="col-75">
                <input
                  class="inputfield"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email "
                  v-model="users.email"
                  onkeypress="emailValid()"
                />
                <span id="email-err" style="color: red"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-25">
                <label for="fname">Phone:</label>
              </div>
              <div class="col-75">
                <input
                  class="inputfield"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone..."
                  maxlength="10"
                  v-model="users.phone"
                  onkeypress="phoneValid()"
                />
                <span id="phone-err" style="color: red"></span>
              </div>
            </div>

            <div class="row">
              <div class="col-25"></div>
              <div class="col-75">
                <input
                  type="submit"
                  onclick="showBasicTable()"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div id="basic">
      <div class="main-title">
        <p>Basic</p>
      </div>

      <div class="container">
        <div class="card">
          <div class="sub-title">Display</div>

          <div style="overflow-x: auto">
            <table class="list" id="employeelists">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody id="addedtasklist"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        fname: "",
        lname: "",
        phone:"",
        email: "",
        age: "",
        gender: "Male",
        users:[],
      },
    };
  },
  computed:{

    nameValid() {
   // var error = document.getElementById("name-err");
    var regex_name_way = /^[-_ a-zA-Z0-9]+$/
    
    if (this.users.fname <= 2  || this.users.fname.length >= 20) {
        console.log("2 - 20");
        //error = 'Name must have 4 to 30 Characters';
        return true;
    }if (this.users.fname.match(regex_name_way)){
        // error = 'Only  alphanumeric is allowed';
         return true;
    }if(this.users.fname == " "){
       //  error = 'Name is required';
         return true;
    }
      return !!this.users.fname;
    },

    ageEnter(){
    var error = document.getElementById("age-err");
    var regex_name_way = /^[-_ a-zA-Z0-9]+$/

    if(this.users.age == " "){
         error.innerHTML = 'Age is required';
         return true;
    }
    if (this.users.age.length <= 2  || this.users.age.length >= 20) {
        error = 'Name must have 4 to 30 Characters';
        return true;
    }if (this.users.age.match(regex_name_way)){
         error = 'Only  alphanumeric is allowed';
         return true;
    }
      return !!this.users.age;
    },

     formIsValid() {
      return (
        this.nameValid &&
        this.ageEnter
      );
    },
    

    
   

  },
  methods:{
   
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
    }

  }
};
</script>

<style scope>
* {
  box-sizing: border-box;
}

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

.inputfield {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin-top: 10px;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  font-family: "Open Sans", sans-serif;
}

label > span {
  color: red;
}

input[type="radio"] {
  margin: 12px;
}

input[type="submit"] {
  background-color: #3f90ce;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action {
  background-color: #3f90ce;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #72bb75;
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
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}

.card table {
  margin: 10px;
  
 
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 16px;
}
</style>
