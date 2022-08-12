<template>
    <div class="bootcamp-register container">
      <form action="" class="card-panel green-text" novalidate>
        <h2 class="center">Register for Jollyes</h2>

        <div class="field">
            <label for="name">Name</label>
            <input type="text" v-model="bootcamp.name" placeholder="Enter name" @input="$v.bootcamp.name.$touch()" :class="`form-control ${$v.bootcamp.name.$error ? 'is-invalid' :''}`">
       
        
        </div>
       

        <div class="field">
            <label for="name">Email</label>
            <input type="text" v-model="bootcamp.email" placeholder="Enter email" @input="$v.bootcamp.email.$touch()" :class="`form-control ${$v.bootcamp.email.$error ? 'is-invalid' :''}`">
       
       </div>
       

        <div class="field">
            <label for="location">Location</label>
            <input type="text" v-model="bootcamp.location" placeholder="Enter location" @input="$v.bootcamp.location.$touch()" :class="`form-control ${$v.bootcamp.location.$error ? 'is-invalid' :''}`">
        
        </div>
       

        <div class="field">
            <label for="phone_number">Contact</label>
            <input type="text" v-model="bootcamp.phone_number" placeholder="Enter location" @input="$v.bootcamp.phone_number.$touch()" :class="`form-control ${$v.bootcamp.phone_number.$error ? 'is-invalid' :''}`">
         
        </div>

           <template v-if="$v.bootcamp.name.$error">
           <p class="errorMessage" v-if="!$v.bootcamp.name.reuired">Name is required</p>
          </template>

           <template v-if="$v.bootcamp.email.$error">
           <p class="errorMessage" v-if="!$v.bootcamp.email.reuired">Email is required</p>
           <p class="errorMessage" v-if="!$v.bootcamp.email.email">Email is invalid</p>
        </template>

        <template v-if="$v.bootcamp.location.$error">
           <p class="errorMessage" v-if="!$v.bootcamp.location.reuired">location is required</p>
        </template>

         <template v-if="$v.bootcamp.phone_number.$error">
           <p class="errorMessage" v-if="!$v.bootcamp.phone_number.reuired">Phone number is required</p>
           </template>
         
         <div class="field center">
            <button class="btn green">Register</button>
         </div>

      </form>
    </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
    export default {
        name:"RegForm",
         data() {
            return {
                bootcamp:{
                    name:"",
                    email:"",
                    location:"",
                    phone_number:""
                }
            }
         },
         validations:{
            bootcamp:{
                name:{
                    required,
                    minLength:minLength(3),
                    maxLength:maxLength(50)
                },
                 email:{
                    required,
                    email
                },
                 location:{
                    required
                },
                 phone_number:{
                    required,
                }
            }
           //validation does here
         }
    }
</script>

<style  scoped>

.bootcamp-register{
    max-width:600px;
    margin-top: 60px;
}

.bootcamp-register h2{
   font-size: 2.4em;
}

.bootcamp-register .field{
   margin-bottom: 16px;
}

.errorMessage {
    color: rgb(236,79,79);
}

.is-invalid {
      border-color: #E84444;
     
    }
</style>