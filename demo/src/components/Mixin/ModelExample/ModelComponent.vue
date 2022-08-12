<template>
    <div>
       <h3>Let's Click on this model!!</h3>
       <button @click="toggleShow">
          Add
       </button>

       <model-card v-if="isShowToggle" class="modal">
          <button @click="toggleShow">Close</button>
       </model-card>

       
    </div>
</template>

<script>
import Toggle from '../../../mixins/toggle'
    export default {
        name:'ModelComponent',
        mixins:[Toggle]
        
    }
</script>

<style scoped>
button {
  font-family: "Roboto Mono";
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 100px;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}
.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
  top: 50px;
  z-index: 2000;
  left: 50%;
  transform: translateX(-120px);
}
</style>