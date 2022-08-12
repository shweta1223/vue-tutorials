<template>
    <div>
       <DyanamicComponent/>
        <PropsType title ="Shweta" 
        :likes="post.likes" 
        :name="post.name" 
        :company="post.company" 
        :is-published="post.isPublished" 
        :comment-ids="post.commentIds"
        :author="post.author"
        :color="post.author"
        isActive="true"
        />  

        <NonPropsAttributes id="MyNonPropId" title="Non-PropsAttribute" name="AureateLabs" :isPublished="true"/>   

        <NonPropInputField id="NameId" required data-title="Input box"/>   

        <NonPropsClick 
        :id="test"
            label="my great button"
            @click="handleClick"
            @dblclick="handleClick1"
        />    

                                                                                                                                                  

                                                                                                                                                       
    </div>
</template>

<script>
import NonPropInputField from './NonPropInputField.vue'


import NonPropsAttributes from './NonPropsAttributes.vue'
import NonPropsClick from './NonPropsClick.vue'
    export default {
        name:"AddCom",
         data(){
            return{
                post:{
                  name:'Singh',
                  company:"Aureate Labs",
                  likes:25,
                  isPublished:true,
                  commentIds:[200,210,220],
                   author:{
                      name: 'Sonali',
                      company: 'Blue Papillon'
                   },
                   color:"red"
              }
            }
        },
        components:{
 
        NonPropsAttributes,
                NonPropInputField,
                NonPropsClick
        },
        methods:{
            handleClick(){
                // alert('Clicked')
                console.log('single click')
            },
            handleClick1 (){
                alert('double Clicked')
            }
        }
       
    }
</script>

<style lang="scss" scoped>

</style>