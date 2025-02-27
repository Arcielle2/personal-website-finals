<script setup>
import { ref } from 'vue';
import { motion } from 'framer-motion';

const lanterns = ref([
  { id: 1, top: '80%', left: '50%' },
  { id: 2, top: '85%', left: '30%' },
  { id: 3, top: '78%', left: '70%' }
]);
</script>

<template>
  <div class="relative h-screen bg-gradient-to-b from-purple-900 to-yellow-300 overflow-hidden">
    <!-- Floating Lanterns -->
    <motion.div 
      v-for="lantern in lanterns" :key="lantern.id"
      class="absolute w-16 h-16 bg-yellow-300 rounded-full opacity-70"
      :style="{ top: lantern.top, left: lantern.left }"
      animate="{ y: [-20, -200], opacity: [1, 0] }"
      transition="{ repeat: Infinity, duration: 5, ease: 'easeOut' }"
    />
    
    <!-- Hero Section -->
    <div class="flex flex-col justify-center items-center h-full text-white text-center px-6">
      <h1 class="text-5xl font-bold tracking-wide drop-shadow-lg">Welcome to My Fairytale</h1>
      <p class="text-lg mt-3 max-w-lg italic">"Venture beyond the tower and explore my world of creativity and code!"</p>
      <motion.button 
        class="mt-5 px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 transition"
        whileHover="{ scale: 1.1 }"
        whileTap="{ scale: 0.9 }"
      >Enter My World</motion.button>
    </div>
  </div>
</template>

<style>
/* Additional styles for enhanced magical feel */
</style>
