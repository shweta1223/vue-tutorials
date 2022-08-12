<template>
    <div>
         <h2>Binding Class</h2>
        <h4 class="underline">Static Class</h4>    <!-- Static class example -->
        <h4 v-bind:class="{ active: isActive }">Dynamic Class</h4><!-- Dynamic class --->
        <h2 class="underline" v-bind:class="status">Dynamic and Static both class Binding</h2>   <!-- Dynamic class example with Static also --> 
        <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
        <h2 class="underline" v-bind:class="{ active: isActive ,'text-danger' : hasError}">Dynamic Class</h2>
        <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Soldout Movie</h2>
        <p v-bind:class="classObject">Class object from the data and Computed Properties</p>
        <p v-bind:class="[activeClass, errorClass]">Class With Array</p> <!-- Dynamic class example with Static also --> 
        <h2 v-bind:class="isSoldout ? 'sold-out' : '' ">Soldout Movie</h2>
        <h2 v-bind:class="isSoldout ? 'sold-out' : null">Soldout Movie</h2>
    </div>
</template>

<script>
    export default {
        name:"ClassBinding",
        data(){
            return{
                isActive:false,
                hasError:null,
                status:'danger',
                isPromoted:true,
                isSoldout:false, 
                error:null,
                // classObject: {
                //     active: true,
                //     'text-danger': true
                //   },
                activeClass:'active',
                errorClass:'text-danger'
            }
        },
        computed:{
          classObject: function () {
          return {
          active: this.isActive && !this.error,
         'text-danger': this.error && this.error.type === 'red'
    }
  }
        }
    }
</script>

<style  scoped>

.underline {
    text-decoration: underline;
}
.promoted{
    font-style: italic;
    color: orange;
}

.sold-out{
    color: red;
}

.new{
    color: green;
}

</style>