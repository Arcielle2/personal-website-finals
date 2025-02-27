<template>
  <div>
    <button @click="show = !show">Toggle</button>
    
    <transition name="fade">
      <div v-if="show" class="box">Hello, Vue!</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
/* Define the fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
