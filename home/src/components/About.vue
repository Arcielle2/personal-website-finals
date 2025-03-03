<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar">
        <div class="image-container">
          <img :src="selectedImage" alt="Sidebar Image" class="sidebar-img" />
          <img v-if="showHiImage" :src="hiImage" alt="Overlay Image" class="overlay-img" />
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="box box1">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(0)" />
        <div class="hidden-content" v-if="openBoxes[0]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(0)" />
          <div class="course-label"><p>Course</p></div>
          <div class="course-boxes">
            <div class="course-box" @click="changeSidebarImage(course1Text)">
              <img :src="c1" alt="Course 1" class="course-img" />
            </div>
            <div class="course-box" @click="changeSidebarImage(course2Text)">
              <img :src="c2" alt="Course 2" class="course-img" />
            </div>
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import sunImage from "@/assets/ribbon.jfif";
import defaultImage from "@/assets/bubu.jfif"; // Default sidebar image
import hiImage from "@/assets/hi.jfif"; // Overlay image
import c1 from "@/assets/c1.jfif";
import c2 from "@/assets/c2.jfif";

const openBoxes = ref([false]);
const selectedImage = ref(defaultImage);
const showHiImage = ref(false);
const courseDescription = ref("");

const course1Text = "Bachelor of Science in Computer Science with specialization in Cybersecurity and Forensics. I’m currently studying for a Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at Asia Pacific College. This program allows me to dive deep into the exciting world of computer science while focusing on protecting systems, preventing cyberattacks, and investigating digital crimes. I’m thrilled to explore this dynamic field and develop skills that are vital in today’s digital landscape!";

const course2Text = "SM Foundation Scholar. I’m also proud to be an SM scholar at Asia Pacific College, which has helped me pursue my academic goals with a little extra support.";

const toggleBox = (index) => {
  openBoxes.value[index] = !openBoxes.value[index];
};

const changeSidebarImage = (description) => {
  courseDescription.value = description;
};

let interval;
onMounted(() => {
  interval = setInterval(() => {
    showHiImage.value = true;
    setTimeout(() => {
      showHiImage.value = false;
    }, 10000);
  }, 15000);
});

onUnmounted(() => {
  clearInterval(interval);
});
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

.image-container {
  position: relative;
  display: inline-block;
}

.sidebar-img {
  width: 60%;
  height: auto;
  border-radius: 10px;
  animation: moveAround 2s infinite alternate ease-in-out;
  transition: transform 0.3s ease-in-out;
}

/* Styling for the hi.jfif image */
.overlay-img {
  position: absolute;
  top: 20px; /* Adjust closer to bubu */
  right: 20px; /* Adjust closer to bubu */
  width: 60px; /* Slightly bigger */
  height: 60px;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  animation: moveAroundSmall 1.5s infinite alternate ease-in-out;
}

/* Movement animation for hi.jfif */
@keyframes moveAroundSmall {
  0% {
    transform: translate(0, 0) scale(1.1);
  }
  25% {
    transform: translate(8px, -8px) scale(1.15);
  }
  50% {
    transform: translate(-8px, 8px) scale(1.2);
  }
  75% {
    transform: translate(5px, -5px) scale(1.15);
  }
  100% {
    transform: translate(-5px, 5px) scale(1.1);
  }
}

@keyframes moveAround {
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(10px, -10px) scale(1);
  }
  50% {
    transform: translate(-10px, 10px) scale(1);
  }
  75% {
    transform: translate(5px, -5px) scale(1);
  }
  100% {
    transform: translate(-5px, 5px) scale(1);
  }
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
  background-color: black;
  border-radius: 15px;
  border: 3px solid rgba(238, 238, 238, 0.2);
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
  filter: brightness(0) invert(1);
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
  background-color: rgb(231, 231, 231);
  border-radius: 12px;
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
  cursor: pointer;
}

.course-label {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

.course-label p {
  box-shadow: 0px 0px 20px 6px #b74b4b;
}

.course-boxes {
  display: flex;
  gap: 15px;
}

.course-box {
  width: 90px;
  height: 80px;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.course-img {
  width: 70px;
  height: 70px;
}

.course-description {
  width: 50%;
  padding: 20px;
  background-color: #fff;
  border: 2px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
</style>
