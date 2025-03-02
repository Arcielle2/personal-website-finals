<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar"></div>
    </div>

    <div class="main-content">
      <div v-for="(box, index) in boxes" :key="index" class="box" @mouseover="hoverEffect(index, true)" @mouseleave="hoverEffect(index, false)">
        <img v-if="!openBoxes[index]" class="toggle-btn" :src="ribbonImage" alt="Ribbon Icon" @click="toggleBox(index)" :class="{ 'black-ribbon': hoveredBoxes[index] }" />
        <div class="hidden-content" v-if="openBoxes[index]">
          <p>Additional Content</p>
          <img class="back-btn" :src="backIcon" alt="Back Button" @click="toggleBox(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ribbonImage from "@/assets/ribbon.jfif";
import backIcon from "https://cdn-icons-png.flaticon.com/128/271/271220.png";

const openBoxes = ref([false, false, false, false, false]);
const hoveredBoxes = ref([false, false, false, false, false]);

const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];
};

const hoverEffect = (index, isHovered) => {
  hoveredBoxes.value[index] = isHovered;
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
  width: 30%;
  background-color: #b74b4b;
  padding: 20px;
  border-radius: 15px;
}

.sidebar {
  width: 355px;
  height: 200px;
  border: 0.5rem solid #e4d4fc;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(198, 171, 224, 0.7);
}

.main-content {
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
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;
}

.box:hover {
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.8);
}

.toggle-btn {
  cursor: pointer;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.black-ribbon {
  filter: brightness(0);
}

.hidden-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e4d4fc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back-btn {
  cursor: pointer;
  width: 30px;
  margin-top: 10px;
}
</style>
