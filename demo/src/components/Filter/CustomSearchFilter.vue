<template>
    <div>
       <div class="wrapper">
         <h1>All Blog Articles</h1>
         <input type="text" name="" id="" v-model="Search" placeholder="Searchbox">
         <div v-for="blog in filterBlogs" class="single-blog" :key="blog.id">
            <h2>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
         </div>
      </div>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"CustomSearchFilter",
        data(){
            return{
               blogs:[],
               Search:""
            }
        },
        methods:{
           search(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => {
        this.blogs = response.data
        })
       .catch(e => {
                this.errors.push(e)
      });
        },
        },
        computed:{
            filterBlogs:function(){
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search)
                })
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>