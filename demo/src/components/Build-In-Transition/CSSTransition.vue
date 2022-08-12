<template>
    <div id="demo">
       <button @click="show = !show">Toggle</button>

        <!-- <transition name="slide-fade" :duration="{ enter: 10000, leave: 30000 }">
           <p  v-if="show">Hello</p>
        </transition> -->

          <transition name="slide-fade" appear>
           <p  v-if="show">hiii</p>
        </transition>
      
    </div>
</template>

<script>
    export default {
        name:"CSSTransition",
        data() {
            return {
                show:true,
                name:""
            }
        },
    }
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active{
     transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
   transform: translateX(10px);
  opacity: 0;
}
</style>