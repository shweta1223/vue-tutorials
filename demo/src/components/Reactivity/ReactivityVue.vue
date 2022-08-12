<template>
    <div>
       {{count}}
    <button @click="increaseCounter()">
      Increase
    </button>
    <!-- Decrease Counter, with an `decreaseLimit` of 0 -->
    <button @click="decreaseCounter(0)" >
      Decrease
    </button>
     <button @click="resetCounter" >
      Reset
    </button>
    <div ref="example-element">Example component.</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count :0,
            }
        },
         methods: {
          increaseCounter() { // Increase
          this.count += 2;
        },
          decreaseCounter() { // Decrease
          this.count -= 2;
        }, 
          resetCounter() { // Reset
          this.count = 0;
        }
     },
        
        beforeCreate(){
          console.log('beforeCreate()', this.count);
        },
        created(){
            setInterval(() => {
               this.count += 2;
            }, 10000)
            console.log('created()',this.count);
              //console.log("Created call when ",this.$el)
        },
        
        beforeMount(){
            console.log('beforeMount',this.count);
            //  console.log(this.$el)
        },
        mounted(){
            console.log('mounted',this.count);
            console.log(this.$el)
        },

        beforeUpdate(){
            console.log('beforeupdate',this.count);
             console.log(this.$el)
             
        },
        updated(){
            console.log('updated',this.count);
             console.log(this.$el)
        },
        beforeDestroy(){
            console.log('beforeDestroy ',this.count);
              this.count = null
              delete this.count
        },
        destroyed(){
            console.log('destroyed', this.count);
        }
        
    }
</script>

<style lang="scss" scoped>

</style>