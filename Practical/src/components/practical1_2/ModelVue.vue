<template>
<div class="modal-mask">
          <div class="modal-wrapper">
            
            <div class="modal-container">

            <button class="modal-default-button" @click="$emit('close')">x</button>
 
              <div class="modal-header">
                 <h5>{{title}}</h5>   
              </div>

              <div class="modal-body">
                    
                    {{body}}
              </div>
             
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        name:"ModelVue",
        data() { 
            return{
                showModal: false
            }
        },
     props: { 
     title:{
         type:String,         
         required:true,
         default:"Default Title"
     }, 
     body: {
        type:String,
        required:false,
     },
         }
    }
</script>

<style  scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper:nth-child(even) {
            border: 2px solid green;
        }

.modal-wrapper:nth-child(odd) {
            border: 2px solid red;
        }

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 550px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h5{
  margin-top: 0;
  color: #42b983;
  
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  background-color: black;
  color: cornsilk;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>