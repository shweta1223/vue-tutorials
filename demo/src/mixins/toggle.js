export default{
    data(){
        return{
            isShowToggle:false
        }
    },
    methods: {
      toggleShow(){
        this.isShowToggle = !this.isShowToggle;
      }
        
    },
}