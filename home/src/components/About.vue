<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar">
        <img :src="selectedImage" alt="Sidebar Image" class="sidebar-img" />
      </div>
    </div>
    <div class="main-content">
      <div class="box box1">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(0)" />
        <div class="hidden-content" v-if="openBoxes[0]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(0)" />
          <div class="course-label">Course</div>
          <div class="course-boxes">
            <div class="course-box" @click="changeSidebarImage('https://cdn-icons-png.flaticon.com/128/11843/11843583.png')">
              <img src="https://cdn-icons-png.flaticon.com/128/11843/11843583.png" alt="Course 1" class="course-img" />
            </div>
            <div class="course-box" @click="changeSidebarImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-u2P46vBuUjw0FipSrLpFnrCx2068q3jNg&s')">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-u2P46vBuUjw0FipSrLpFnrCx2068q3jNg&s" alt="Course 2" class="course-img bw-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sunImage from "@/assets/ribbon.jfif";
import defaultImage from "@/assets/bubu.jfif"; // Default sidebar image

const openBoxes = ref([false, false, false, false, false, false, false]);
const selectedImage = ref(defaultImage); // Set default image

const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];
};

const changeSidebarImage = (newImage) => {
  selectedImage.value = newImage; // Change sidebar image
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
  display: flex;
  justify-content: center;
}

.sidebar {
  width: 100%;
    height: 18rem;
    border:10px solid #15191d;
    background: #1f2122;
    color: #fff;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
}

.sidebar-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 35%;
}

.sub-content {
  width: 30%;
}

.box {
  background-color: #e4d4fc;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.box1, .box2 {
  width: 48.8%;
  height: 150px;
}

.box3, .box4 {
  width: 100%;
  height: 200px;
}

.box5 {
  width: 100%;
  height: 570px;
}

.box:hover {
  box-shadow: 0px 0px 20px 6px #b74b4b;
}

.box:hover .toggle-btn {
  filter: brightness(0.2);
}

.toggle-btn {
  cursor: pointer;
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hidden-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #b74b4b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 12px;
  height: 12px;
  filter: invert(1);
  cursor: pointer;
}

.course-label {
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

.course-boxes {
  display: flex;
  gap: 15px;
}

.course-box {
  width: 90px;
  height: 80px;
  background: #e4d4fc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.course-img {
  width: 50px;
  height: 50px;
}

.bw-img {
  filter: grayscale(1);
}
</style>
