<template>
  <div>
    <transition name="slide">
      <div v-if="isOpen" class="sidebar" :style="{ width }">
        <slot />
      </div>
    </transition>
    <div class="toggle" @click="isOpen = !isOpen">Close</div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  props: {
    width: {
      default: "20em",
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style scoped>

.app {
  display: flex;
  height: 100%;
}
.main {
  flex-grow: 1;
  background: rgb(173, 170, 170);
}
.sidebarContainer {
  display: flex;
}
.sidebar {
  flex-grow: 1;
  padding: 0.5em;
  background: rgb(245, 245, 250);
}
.toggle {
  margin: 0.5em;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -20em;
}
</style>