<template>
  <div>
   
    <button :id="id" v-on="$listeners">click me{{$listeners}}</button>    
    
  </div>
</template>

<script>
export default {
  name: "NonPropsClick",
  props: {
     id:  String, 
    
  },
  data() {
    return {
        clicks:0
    }
  },
  methods:{
    countClicks(){
      this.clicks++
    }
  }
};
</script>

<style lang="scss" scoped>
</style>