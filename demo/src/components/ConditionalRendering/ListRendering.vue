<template>
    <div>
        <h2 v-for="(name, index) in names" :key="name">{{index}} {{name}}</h2>
        <h2 v-for="name in fullName" :key="name">{{name.first}} {{name.last}}</h2>
        <h2 v-for="value in object" :key="value">{{object.title}}  {{object.author}}  {{object.publishedAt}}</h2>

        <div v-for="actor in actors" :key="actor.name">
            <h2>{{actor.name}}</h2>
            <h3 v-for="movie in actor.movies" :key="movie">{{movie}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ListRendaring",
        data(){
            return{
                names:['Vue','JavaScript','Diana'],
                object: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                fullName:[
                    {first:"Shweta",last:"Singh"},
                    {first:"Ayushi",last:"Gupta"},
                    {first:"Sonali",last:"Bhatt"},
                ],
                actors:[
                    {
                        name:"Christian Bale ",
                        movies:['Batmen', 'The Prestige']
                    },
                    {
                        name:"Di Caprio",
                        movies:['Titanic', 'Inception']
                    }
                ]
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>