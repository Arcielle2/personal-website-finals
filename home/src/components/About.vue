<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar"></div>
    </div>

    <div class="main-content">
      <div class="box box1">
        <div class="box-header">Course</div>
        <div class="course-boxes">
          <div class="course-box" @click="openCourse(0)">
            <img src="https://cdn-icons-png.flaticon.com/128/11843/11843583.png" alt="Course 1" />
          </div>
          <div class="course-box" @click="openCourse(1)">
            <img src="https://static.wikia.nocookie.net/logopedia/images/1/18/SM_2010_print.svg/revision/latest?cb=20240423092701" alt="Course 2" />
          </div>
        </div>
      </div>
      <div class="box box2">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(1)" />
        <div class="hidden-content" v-if="openBoxes[1]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(1)" />
          Additional Content
        </div>
      </div>
      <div class="box box3">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(2)" />
        <div class="hidden-content" v-if="openBoxes[2]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(2)" />
          Additional Content
        </div>
      </div>
      <div class="box box4">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(3)" />
        <div class="hidden-content" v-if="openBoxes[3]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(3)" />
          Additional Content
        </div>
      </div>
    </div>

    <div class="sub-content">
      <div class="box box5">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(4)" />
        <div class="hidden-content" v-if="openBoxes[4]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(4)" />
          Additional Content
        </div>
      </div>
    </div>

    <div class="overlay" v-if="selectedCourse !== null">
      <div class="course-detail">
        <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="closeCourse" />
        <img :src="courseImages[selectedCourse]" alt="Selected Course" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sunImage from "@/assets/ribbon.jfif";

const openBoxes = ref([false, false, false, false, false]);
const selectedCourse = ref(null);

const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];
};

const openCourse = (index) => {
  selectedCourse.value = index;
};

const closeCourse = () => {
  selectedCourse.value = null;
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

.box-header {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}

.course-boxes {
  display: flex;
  justify-content: space-between;
}

.course-box {
  width: 48%;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
}

.course-box img {
  width: 100%;
  display: block;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.course-detail {
  background: white;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  text-align: center;
}

.course-detail img {
  max-width: 100%;
  border-radius: 10px;
}

.back-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 24px;
  height: 24px;
  filter: invert(1);
  cursor: pointer;
}
</style>
