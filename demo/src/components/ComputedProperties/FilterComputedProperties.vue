<template>
    <div>
       <input v-model="searchQuery">
    <div v-for="r of result" :key="r.id">{{r.title}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                postList: [
                {id: 1, title: "javascript for dummies" },
                { id: 2, title: "vue for dummies" },
                { id: 3, title: "dos for dummies" },
                { id: 4, title: "windows for dummies" },
                { id: 5, title: "html for dummies" }
            ],
            searchQuery: null,
            }   
        },
        methods: {
        filterEvents: function(searchQuery) {
        this.searchQuery = searchQuery
     }},
        computed:{
            result(){
                if(this.searchQuery){
                    return this.postList.filter((item) => {
                        return this.searchQuery
                         .toLowerCase()
                         .split(" ")
                         .every((v) => item.title.toLowerCase().includes(v));
                         
                    });
                    
                }else{
                        return this.postList;
                    }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>