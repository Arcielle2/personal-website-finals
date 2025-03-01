<template>
  <div class="container">
    <div class="sidebar">
      <div class="sidebar">Sidebar Top</div>
      <div class="contact">Contact</div>
      <div class="comment">Other</div>
    </div>

    <div class="main-content">
      <div class="box" v-for="(isOpen, index) in openBoxes" :key="index">
        <span class="box-text">{{ boxLabels[index] }}</span>
        <img 
          class="toggle-btn"
          src="/src/components/sun.jfif"
          alt="Sun Icon"
          @click="toggleBox(index)"
          :class="{ rotated: isOpen }"
        />
        <transition name="fade">
          <div class="hidden-content" v-if="isOpen">
            Additional Content
          </div>
        </transition>
      </div>
    </div>

    <div class="sub-content">
      <div class="box">
        <span class="box-text">EX ☀️</span>
        <img 
          class="toggle-btn"
          src="/src/components/sun.jfif"
          alt="Sun Icon"
          @click="toggleBox(openBoxes.length - 1)"
          :class="{ rotated: openBoxes[openBoxes.length - 1] }"
        />
        <transition name="fade">
          <div class="hidden-content" v-if="openBoxes[openBoxes.length - 1]">
            Additional Content
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// State for each box's toggle status
const openBoxes = ref([false, false, false, false, false]);

// Labels for each box
const boxLabels = ref(["E A ☀️", "P G", "H I ☀️", "C ☀️", "EX ☀️"]);

// Toggle function
const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Box Sizes */
.box {
  width: 100%;
  height: 150px;
}

/* Toggle Button - Centered */
.toggle-btn {
  cursor: pointer;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-in-out;
}

/* Rotate Effect on Click */
.toggle-btn.rotated {
  transform: translate(-50%, -50%) rotate(180deg);
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
}

/* Transition for Showing and Hiding */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
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
