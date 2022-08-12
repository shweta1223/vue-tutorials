<template>
  <div id="users-details">
    <div class="main-title">
        <p>User List</p>
    </div>

     <div class="container" >
       <div class="card">
           <div class="sub-title">
              Display Users
           </div>

    <table  class="list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
         <tr v-for="(users,index) in userss" v-bind:key="index">
          <td>{{ users.Fullname }}</td>
          <td>{{ users.email }}</td>
          <td>{{ users.age }}</td>
          <td>{{ users.gender }}</td>
          <td><button class="button" @click="$delete(userss, index)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DisplayUser',
    data() {
      return {
        
      }
    },
    props: {
        userss: {
            type: Array,
            default: () => []
        }
    },

    methods: {
       deleteUser(i){
        this.users.splice(i,1)
      }
    },
    computed: {
         Fullname() {
                console.log(this.date);
                return this.userss.fname + this.userss.lname
            }
    }
  }
</script>

<style scoped>

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