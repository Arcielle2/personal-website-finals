<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar">
        <div v-if="!courseDescription" class="image-container">
          <img :src="selectedImage" alt="Sidebar Image" class="sidebar-img" />
          <img v-if="showHiImage" :src="hiImage" alt="Overlay Image" class="overlay-img" />
        </div>
        <p v-else class="sidebar-text">{{ courseDescription }}</p> <!-- Shows only when clicked -->
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
          <div class="experience-label"><p>IT Experience</p></div>
          <div class="experience-container">
            <button @click="prevExperience">❮</button>
            <div class="experience-box">
              <img :src="experiences[currentExperience].icon" alt="Experience Icon" class="experience-img" />
              <p>{{ experiences[currentExperience].name }}</p>
            </div>
          <button @click="nextExperience">❯</button>
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
  selectedImage.value = null;
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

const experiences = ref([
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968544.png" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/128/226/226777.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/721/721671.png" },
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051328.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732007.png" },
  { name: "Vue.js", icon: "https://cdn-icons-png.flaticon.com/128/16511/16511176.png" },
  { name: "React.js", icon: "https://cdn-icons-png.flaticon.com/128/3393/3393920.png" },
  { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968671.png" },
  { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/128/274/274439.png" },
  { name: "Supabase", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUmXAGUcOzjy2xaAKISEG6ojczFz_KFn3iZA&s" },
  { name: "Github", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png" },
  { name: "Vercel", icon: "https://static.wikia.nocookie.net/logopedia/images/a/a7/Vercel_favicon.svg/revision/latest?cb=20221026155821" },
  { name: "XAMPP", icon: "https://static-00.iconduck.com/assets.00/xampp-icon-1014x1024-czirhwu5.png" },
  { name: "Eclipse", icon: "https://brandslogos.com/wp-content/uploads/images/large/eclipse-logo-black-and-white.png" },
  { name: "Flowgorithm", icon: "https://lh3.googleusercontent.com/proxy/GEvQaA8UT24MO4Db7C2VYOmt-87UHO2omQIRSnRczYF1auqMd2z-uh2B-YG9fQ_wMhZ076k7ypVVZBkzvzx9DCw24Qos" },
  { name: "Linux", icon: "https://cdn-icons-png.flaticon.com/128/16066/16066075.png" },
  { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968704.png" },
  { name: "Canva", icon: "https://i.pinimg.com/736x/c1/b8/3a/c1b83ab03539d3eb6448148aa01c45a4.jpg" }
]);

const currentExperience = ref(0);
const prevExperience = () => {
  currentExperience.value = (currentExperience.value - 1 + experiences.value.length) % experiences.value.length;
};
const nextExperience = () => {
  currentExperience.value = (currentExperience.value + 1) % experiences.value.length;
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
  flex-shrink: 0; /* Prevents shrinking */
  min-height: 150px; /* Ensures a minimum size */
  max-height: 200px; /* Prevents excessive expansion */
  overflow: hidden; /* Keeps extra content inside */
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
  text-shadow: 
    0px 0px 10px #b74b4b,  
    0px 0px 20px #b74b4b,  
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b; /* Adjust blur effect */
  font-weight: bold; /* Optional: Make text stand out more */
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

.experience-label {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

.experience-label p {
  text-shadow:
    0px 0px 10px #b74b4b,
    0px 0px 20px #b74b4b,
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b;
  font-weight: bold;
}

.experience-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.experience-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  padding: 15px;
  border-radius: 10px;
  color: white;
  font-size: 18px;
}

.experience-img {
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
}

button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
}
</style>
