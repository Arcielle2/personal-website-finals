<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar-header">
        <h2>Arcielle Marie</h2>
        <hr class="sidebar-divider" />
      </div>
    </div>

    <div class="main-content">
      <div class="box box1" @click="toggleBox(0)">Additional Content</div>
      <div class="box box2" @click="toggleBox(1)">Additional Content</div>
      <div class="box box3" @click="toggleBox(2)">Additional Content</div>
      <div class="box box4" @click="toggleBox(3)">Additional Content</div>
    </div>

    <div class="sub-content">
      <div class="box box5" @click="toggleBox(4)">Additional Content</div>
    </div>
  </div>
  <router-link to="/" class="btn">Go Back Home</router-link>
</template>

<script setup>
import { ref } from "vue";

// Toggle logic for boxes
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

.container {
  display: flex;
  gap: 10px;
  padding: 10px;
  height: 91.8vh;
  justify-content: center;
  margin-top: 1.7rem;
}

.main-sidebar {
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #452981;
  padding: 20px;
  border-radius: 15px;
  align-content: center;
}

.sidebar-header {
  text-align: left;
  padding: 10px;
  font-size: 10px;
  font-weight: bold;
  color: white;
}

.sidebar-divider {
  width: 100%;
  height: 3px;
  background-color: white;
  border: none;
  margin-bottom: 15px;
}

.main-content,
.sub-content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 35%;
}

.box {
  background-color: #e4d4fc;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
  }
  .main-content,
  .sub-content {
    width: 100%;
  }
  .box {
    width: 100%;
  }
}
</style>
