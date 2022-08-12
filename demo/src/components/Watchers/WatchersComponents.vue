<template>
    <div>
      <h1>Type Message</h1>
      <input type="text" v-model="messages">
      <p v-if="typing">Typing...</p>
      <br>
      <h1>Change GB to MB and MB to GB</h1>
      GB:<input type="number" v-model.number="gb">
      MB:<input type="number" v-model.number="mb">

      <br>
        <h1>Volume Tracker (0-20)</h1>
        <h3>Current Volume - {{volume}}</h3>
        <div>
            <button @click="volume += 2">Increase</button>
            <button @click="volume -= 2">Decrease</button>

        </div>
        <br>
        <h1>Movie</h1>
        <input type="text" v-model="movieInfo.title">
        <br>
        <h1>Display FullName</h1>
        <p>First name - {{ firstName}}</p>
        <p>Last name - {{ lastName   }}</p>
         <p>Full name - {{ fullName   }}</p>
         <input type="text" v-model="fullName"> 
    </div>
</template>

<script>


    export default {
        data(){
            return{
                messages:"",
                typing:false,
                gb:null,
                mb:null,
                volume:0,
                movieInfo:{
                    title:'',
                    actor:''
                },
                  firstName: 'Aureate',
                  lastName: 'labs',
                  fullName: '' 
            }
        },
        computed:{
             title(){
                 return this.movieInfo.title;
             },
            //  fullName:function(){
            //      return this.firstName + ' ' + this.lastName
            //  }
        },
        watch:{
            messages(newValue, oldValue){
                 this.typing = true
              console.log("New Value" , newValue);
              console.log("Old Value" , oldValue);

              setTimeout(() => {
                  this.typing = false
              }, 5000);
            },

            gb(value){
                this.mb = value * 1024
            },
            mb(value){
                this.gb = value / 1024
            },
            volume(newValue,oldValue){
                if(newValue > oldValue && newValue==16){
                    alert('Listening to a high volume' )
                }
            },
            "movieInfo.title" : function(oldVal, newVal) {
                 console.log(oldVal + " " + newVal);
            },
            // movieInfo: {             b
            //     handler(val) {

            //     },
            //     deep: true
            // },
            title(oldVal, newVal){
                console.log("Watching title with the computed propaties help" + " " + oldVal + " " + newVal);
            },
            firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
            console.log(this.fullName);
            },
            lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
            }
            
        }
}
    
</script>

<style lang="scss" scoped>

</style>