<template>
    <div>
        <p>Original Message : {{message}}</p>
        <p>Original  reversed Message : {{ reverseMessage }}</p>
        <input name="message" type="text" v-model="message" />
        <p>a ={{a}}</p>
        <p>b ={{b}}</p>
        

    </div>
</template>

<script>
    export default {
        data(){
            return{
                message:"Hello",
                a:1,
            }
        },
        method:{
            ChnageFullname(){
                this.fullName = "Shweta"
            }
        },
        computed:{
            reverseMessage: {
            get:function(){
                 return this.message
             },
             set:function(newvaluue){
                 this.message = newvaluue.split("").reverse().join("")
             }
                
            },
            
            b:{
             //getter
             get:function(){
                 return this.a+1
             },
             //setter
             set:function(newvaluue){
                 this.a = newvaluue - 1
                 
             }
            }
        },
        mounted () {
            setTimeout(()=> {
                this.reverseMessage = this.message.split("").reverse().join("")
            }, 1000)
        },
        methods: {
        //  reverseMessage: function () {
        //      return this.message.split('').reverse().join('')
        //   }
        }
    }
</script>

<style lang="scss" scoped>

</style>