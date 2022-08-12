<template>
    <div>
        <h2>Listening to Events</h2>
        <h4>Counter Value : {{counter}}</h4>
        <button v-on:click="counter += 1">Button has been clicked {{counter}}</button>

        <h2>Method Event Handlers</h2>

        <h4>Counter Value : {{count + 1}}</h4>
        <button v-on:click="greet">Button has been clicked {{count}}</button>

         <h4>Name Display : {{name}}</h4>
        <button v-on:click="msg">Button has been clicked {{name}}</button>

        <h2>Method Inline Event Handlers</h2>
        <button v-on:click="say('hello')">Say hello</button>
        <button v-on:click="say('What')">Say What</button>


        <h2>Event Modifiers</h2>

        <h4>.once Modifier  -- the click event will be triggered at most once </h4>
        <button v-on:click.once="greet">Count only once {{count}}</button>

        <h4>stop Modifier  </h4>

        <div>{{num}}</div>
        <div v-on:click="fun1">
          <button v-on:click.stop="fun2">Increase by one</button>   
        </div>
        

        <h4>prevent Modifier  </h4>
        <form v-on:submit.prevent="onSubmit"  action="">
             
             <input type="text" name="fname" placeholder="First name" id="fname" v-model.lazy.trim="user.fname">
             <h4>Data is -- {{user.fname}}</h4>
             <input type="text" name="lname" placeholder="Last name" id="lname" v-model.lazy="user.lname">
              <h4>Data is -- {{user.lname}}</h4>
             <button type="submit" value="onSubmit">Submit</button>

        </form>

         
         

        <h2>Input Modifiers Key</h2>    
             <input type="text" placeholder="trim" v-model.trim="user.fname">{{user.fname}}
             <input type="text" placeholder="lazy" v-model.lazy="user.lname">{{user.lname}}
             <input type="text" placeholder="number" v-model.number="user.age">{{user.age}}
             
        
        <h4>.prevent Modifier  </h4>
        <form v-on:submit.prevent="onSubmit"  action="">
             
             <input type="text" name="fname" placeholder="First name" id="fname" v-model.lazy.trim="user.fname">
             <h4>Data is -- {{user.fname}}</h4>
             <input type="text" name="lname" placeholder="Last name" id="lname" v-model.lazy="user.lname">
              <h4>Data is -- {{user.lname}}</h4>
             <button type="submit" value="onSubmit">Submit</button>
        </form>

      
         <h2>Key Modifiers</h2>
        <input type="text" v-on:keyup.enter="pressedEnter" placeholder="enter">
        <input type="text" v-on:keyup.delete="pressedEnter" placeholder="captures both “Delete” and “Backspace” keys">
        <input type="text" v-on:keyup.esc="pressedEnter" placeholder="esc">
        <input type="text" v-on:keyup.space="pressedEnter" placeholder="space">
        <input type="text" v-on:keyup.up="pressedEnter" placeholder="up">
        <input type="text" v-on:keyup.right="pressedEnter" placeholder="right">
        <input type="text" v-on:keyup.left="pressedEnter" placeholder="left">
        <input type="text" v-on:keyup.down="pressedEnter" placeholder="down">

    </div>
</template>

<script>
    export default {
        name:'EventHandling',
        data(){
            return{
                counter:0,
                count:1,
                name:'',
                message:"",
                args: {
                    id: 'id1',
                    class: 'train',
                },
                user:{
                    fname:'',
                    lname:"",
                    age:""
                },
                num:0
            }
        },
        methods:{
            greet:function(){
                //event.stopPropagation()
                this.count++
                console.log(this.count);
            },
            msg:function(){
               alert(`Hello ${this.name}`)
              
            },
            say:function(message){
                alert(message)
            },
            onSubmit(){
                alert("Submitted")
            },
            dummy(event){
                event.stopPropagation();
            },
            fun1(){
                this.num = this.num + 1
                console.log("Function 1 called");

            },
            fun2(){
               console.log("Function 2 called");
            },
            pressedEnter(){
                alert("You have pressed key")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>