<template>
    <div id="demo">
       <button @click="show = !show">Toggle</button>

        <transition name="bounce">
           <p  v-if="show">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, debitis adipisci tenetur iure labore mollitia.</p>
        </transition>
      
    </div>
</template>

<script>
    export default {
        name:"CSSAnimation",
        data() {
            return {
                show:true,
            }
        },
    }
</script>

<style scoped>

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>