<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar">
        <div class="contact">Contact</div>
        <div class="comment">Other</div>
      </div>
    </div>

    <div class="main-content">
      <div v-for="(box, index) in 4" :key="index" class="box">
        <img
          class="toggle-btn"
          src="/src/components/sun.jfif"
          alt="Lock Icon"
          @click="toggleBox(index)"
        />
        <div class="hidden-content" v-if="openBoxes[index]">
          Additional Content
        </div>
      </div>
    </div>

    <div class="sub-content">
      <div class="box">
        <img
          class="toggle-btn"
          src="/src/components/sun.jfif"
          alt="Lock Icon"
          @click="toggleBox(4)"
        />
        <div class="hidden-content" v-if="openBoxes[4]">
          Additional Content
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openBoxes = ref([false, false, false, false, false]);

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
.main-sidebar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: #452981;
  padding: 10px;
  border-radius: 15px;
}

.sidebar {
  width: 100%;
  height: auto;
  padding: 1rem;
  text-align: center;
}

.contact,
.comment {
  padding: 10px;
  background-color: #e4d4fc;
  border-radius: 8px;
  margin: 10px;
  font-weight: bold;
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
  width: 100%;
  height: 200px;
}

/* Toggle Button - Centered */
.toggle-btn {
  cursor: pointer;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* Hidden Content */
.hidden-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d4c3f2;
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

  .main-sidebar,
  .main-content,
  .sub-content {
    width: 100%;
  }

  .box {
    width: 100%;
  }
}
</style>
