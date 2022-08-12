export default {
    data(){
        return{
            message:"Mixin with external JS file",
            foo:'abc'
        }
    },  
    created: function () {
        console.log('mixin hook called')
      },
      methods: {
        fooo: function () {
          console.log('foo')
        },
        conflicting: function () {
          console.log('from mixin')
        },
      },
      computed:{
        fullname(){
          return this.fname + this.mname
        }
    }
}