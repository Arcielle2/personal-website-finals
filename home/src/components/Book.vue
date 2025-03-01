<template>
  <div class="container">
    <div class="sidebar">
      <div class="sidebar">Sidebar Top</div>
      <div class="contact">Contact</div>
      <div class="comment">Other</div>
    </div>

    <div class="main-content">
      <div v-for="(isOpen, index) in openBoxes" :key="index" class="box">
        Box {{ index + 1 }}
        <img 
          class="toggle-btn" 
          src="/src/components/sun.jfif" 
          alt="Sun Icon"
          :class="{ glow: isGlowing[index] }"
          @click="toggleBox(index)"
        />
        <div class="hidden-content" v-if="isOpen">Additional Content</div>
      </div>
    </div>

    <div class="sub-content">
      <div class="box">
        EX ☀️
        <img 
          class="toggle-btn" 
          src="/src/components/sun.jfif" 
          alt="Sun Icon"
          :class="{ glow: isGlowing[openBoxes.length] }"
          @click="toggleBox(openBoxes.length)"
        />
        <div class="hidden-content" v-if="openBoxes[openBoxes.length]">Additional Content</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openBoxes = ref([false, false, false, false, false]);
const isGlowing = ref([false, false, false, false, false]);

const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];

  // Glow effect trigger
  isGlowing.value[index] = true;

  // Remove glow after 0.5s
  setTimeout(() => {
    isGlowing.value[index] = false;
  }, 500);
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  background: #110222;
}

/* Main Layout */
.container {
  display: flex;
  gap: 10px;
  padding: 10px;
  height: 91.8vh;
  justify-content: center;
  margin-top: 1.7rem;
}

/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background-color: #452981;
  padding: 10px;
  border-radius: 15px;
}

/* Main Content */
.main-content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 35%;
}

/* Sub Content */
.sub-content {
  width: 30%;
}

/* Box Styling */
.box {
  background-color: #e4d4fc;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease, height 0.5s ease;
}

/* Toggle Button - Centered */
.toggle-btn {
  cursor: pointer;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: box-shadow 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

/* Glow Effect */
.glow {
  box-shadow: 0 0 20px 8px rgba(255, 223, 0, 0.8);
  opacity: 1;
}

/* Hidden Content */
.hidden-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e4d4fc;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease-in-out, visibility 0s linear 0s;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
  }

  .sidebar {
    width: 100%;
  }

  .main-content, .sub-content {
    width: 100%;
  }

  .box {
    width: 100%;
  }
}
</style>
