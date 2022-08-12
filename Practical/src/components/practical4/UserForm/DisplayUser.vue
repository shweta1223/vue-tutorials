<template>
  <div id="users-details">
    <table  class="user-table">
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
          <td>{{ users.fname }}</td>
          <td>{{ users.email }}</td>
          <td>{{ users.age }}</td>
          <td>{{ users.gender }}</td>
          <td><button @click="$delete(userss, index)" class="delete-button">Delete</button></td>
        </tr>
      </tbody>
    </table>
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
  }
</script>

<style scoped>
.empty-table {
  text-align: center;
}

.users-details{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.user-table{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

.user-table td, .user-table th {
  border: 1px solid #ddd;
  padding: 5px;
}

.user-table tr:nth-child(even){background-color: #f2f2f2;}

.user-table tr:hover {background-color: #ddd;}

.user-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #84613D;
  color: white;
}


</style>