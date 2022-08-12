<template>
    <div>
        <h2>Search User Details</h2>
          <div class="search-wrapper">  
            <!-- <input type="text" v-model="searchQuery" placeholder="Search with V-model...."/> -->
            <input type="text" id="searchKey" @keypress.enter="searchOnEnter" placeholder="Search...."/>
            <button @click="searchOnClick($event)" >Search</button>
       
       
            
         
  
     <div class="wrapper">
        <detail-display 
         v-bind:class="isCard && 'card'" 
         v-for="user in result" 
         :key="user.id"
         :title="user.title"
         :body="user.body"
         @click="setTitleDes(user.title, user.body)"
        ></detail-display>
    </div>

       <model-vue v-if="showModal" @close="showModal = false" :title="currentTitle" :body="currentDes" >
       </model-vue>
</div>
</div>
</template>

<script>

import axios from "axios"

    export default {
        name:"SearchUser",
        data(){
            return{
                users:[],
                searchQuery:"",
                isCard:true,
                showModal: false,
                currentTitle: '',
                currentDes: ''
            }
        },
        mounted () {
         this.search()
    }, 
      //  props: {
      //      users:{
      //         type:Array
      //      }
      // }, 
     methods: {
      setTitleDes (title, des) {
        console.log('dddd')
        this.currentTitle = title
        this.currentDes = des
        this.showModal = true
      },
        searchOnEnter (e) {
            this.searchQuery = e.target.value
        },
        searchOnClick () {
          this.searchQuery 
              console.log(this.searchQuery);
       },
        search(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => {
        this.users = response.data
        })
       .catch(e => {
                this.errors.push(e)
      });
        },
        },
    
      
     
    computed: {
    result(){
      if(this.searchQuery){
                    return this.users.filter((item) => {
                        return this.searchQuery
                         .toLowerCase()
                         .split(" ")
                         .every((v) => item.title.toLowerCase().includes(v));
                         
                    });
                    
                }else{
                        return this.users;
    }
    }
  }
  }
  
    
</script>

<style  scoped>


.wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 444px;
    padding-top: 12px;
    
  }
.card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 100%;
    margin: 12px;
    transition: .15s all ease-in-out;
  }



.card:nth-child(even) {
            border: 2px solid green;
        }

.card:nth-child(odd) {
            border: 2px solid red;
        }

</style>