<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="main-header">

      </div> <br>
      <div class="sidebar">
        <div v-if="!courseDescription" class="image-container">
          <div v-if="!hobbyDescription" class="image-container">
          <img :src="selectedImage" alt="Sidebar Image" class="sidebar-img" />
          <img v-if="showHiImage" :src="hiImage" alt="Overlay Image" class="overlay-img" />
          </div>
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
          <div class="b">
            <div class="exp-container">
              <h2>{{ items[currentIndex].name }}</h2>
              <img :src="items[currentIndex].icon" alt="Icon" class="icon" v-if="items[currentIndex].icon" />
            </div>
            <div class="buttons">
              <button @click="prevItem" :disabled="currentIndex === 0">
                <img src="https://cdn-icons-png.flaticon.com/128/318/318477.png" alt="Previous" />
              </button>
              <button @click="nextItem" :disabled="currentIndex === items.length - 1">
                <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="box box3">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(2)" />
        <div class="hidden-content" v-if="openBoxes[2]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(2)" />
          </div>
        </div>


      <div class="box box4">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(3)" />
        <div class="hidden-content" v-if="openBoxes[3]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(3)" />
          <div class="hobby-label"><p>Hobbies and Interests</p></div>
            <div class="hobby-boxes">
              <div class="hobby-box" @click="changeSidebarImage(hobby1Text)">
                <img :src="'https://arciellegercan.github.io/WEBPROG-SF231-Personal-Website/home/pictures/Media%20(10).jfif'" alt="Hobby 1" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby2Text)">
                <img :src="'https://i.pinimg.com/736x/ed/da/bf/eddabf1355cd6aa1da7eb89c84f24f17.jpg'" alt="Hobby 2" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby3Text)">
                <img :src="'https://i.pinimg.com/736x/55/36/4d/55364dbe7efe7052c33df1e3a7a9614f.jpg'" alt="Hobby 3" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby4Text)">
                <img :src="'https://i.pinimg.com/736x/88/5d/c6/885dc6bac43aaf18105b43cb681734a3.jpg'" alt="Hobby 4" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby5Text)">
                <img :src="'https://arciellegercan.github.io/WEBPROG-SF231-Personal-Website/home/pictures/Media%20(3b).jfif'" alt="Hobby 5" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby6Text)">
                <img :src="'https://i.pinimg.com/736x/d8/48/83/d84883f6e9847ff87943cbe3e8ff6f24.jpg'" alt="Hobby 6" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby7Text)">
                <img :src="'https://i.pinimg.com/736x/b8/ac/52/b8ac52f4741264179dc27a64c6434e1e.jpg'" alt="Hobby 7" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby8Text)">
                <img :src="'https://arciellegercan.github.io/WEBPROG-SF231-Personal-Website/home/pictures/Media%20(9).jfif'" alt="Hobby 8" class="hobby-img" />
              </div>
            </div>
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
const hobbyDescription = ref("")

const course1Text = "Bachelor of Science in Computer Science with specialization in Cybersecurity and Forensics. I’m currently studying for a Bachelor of Science in Computer Science with a specialization in Cybersecurity and Forensics at Asia Pacific College. This program allows me to dive deep into the exciting world of computer science while focusing on protecting systems, preventing cyberattacks, and investigating digital crimes. I’m thrilled to explore this dynamic field and develop skills that are vital in today’s digital landscape!";
const course2Text = "SM Foundation Scholar. I’m also proud to be an SM scholar at Asia Pacific College, which has helped me pursue my academic goals with a little extra support.";

const hobby1Text = "Playing Instrument. I love playing the ukulele and keyboard; music brings joy and relaxation to my everyday life.";
const hobby2Text = "Singing.Singing allows me to express myself and connect with my emotions through melodies and lyrics.";
const hobby3Text = "Listening to Music. Music is my constant companion—it energizes me, soothes my soul, and inspires creativity.";
const hobby4Text = "Reading Books. Diving into books is like exploring a new world; it fuels my imagination and broadens my perspective.";
const hobby5Text = "Playing Online Games. I enjoy playing online games as they challenge my strategy skills and are a fun way to unwind.";
const hobby6Text = "Eating Foods. I enjoy discovering new flavors and indulging in comfort food.";
const hobby7Text = "Watching Movies. Movies transport me to new adventures, letting me experience stories from diverse perspectives.";
const hobby8Text = "Designing. Designing allows me to channel my creativity and bring ideas to life in a visually appealing way.";

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

const items = [
  // Programming & Scripting
  { name: "Programming & Scripting" },
  { name: "Python", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968544.png" },
  { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/14/14427.png" },
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/721/721671.png" },

  // Web Development & Frameworks
  { name: "Web Development & Frameworks" },
  { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051328.png" },
  { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732007.png" },
  { name: "Vue.js", icon: "https://cdn-icons-png.flaticon.com/128/16511/16511176.png" },
  { name: "React.js", icon: "https://cdn-icons-png.flaticon.com/128/3393/3393920.png" },
  { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968671.png" },

  // Databases & Backend Services
  { name: "Databases & Backend Services" },
  { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/128/274/274439.png" },
  { name: "Supabase", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/supabase-pr0yrzxeug5s365cm8rwm.png/supabase-j1jz44w1wcovb099lhra7.png?_a=DAJFJtWIZAAC" },

  // Version Control & Deployment
  { name: "Version Control & Deployment" },
  { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png" },
  { name: "Vercel", icon: "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" },

  // Development Tools & Environments
  { name: "Development Tools & Environments" },
  { name: "XAMPP", icon: "https://static-00.iconduck.com/assets.00/xampp-icon-1014x1024-czirhwu5.png" },
  { name: "Linux (Ubuntu)", icon: "https://cdn-icons-png.flaticon.com/128/16066/16066075.png" },

  // Design & UI/UX
  { name: "Design & UI/UX" },
  { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968704.png" },
  { name: "Canva", icon: "https://i.pinimg.com/736x/c1/b8/3a/c1b83ab03539d3eb6448148aa01c45a4.jpg" }
];

const currentIndex = ref(0);

const nextItem = () => {
  if (currentIndex.value < items.length - 1) {
    currentIndex.value++;
  } else {
    // If the last item is clicked, reset
    setTimeout(() => {
      currentIndex.value = 0;
    }, 1000); // Delay for effect
  }
};

const prevItem = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
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
  gap:10px;
}

.main-header{
  width: 100%;
  height: 4rem;
  border:10px solid #15191d;
  background: #1f2122;
  font-family: 'Public Pixel', sans-serif;
  font-size: 24px;
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
  color: black;
  font-size: 8px;
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

.b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
}

.experience-label {
  font-size: 20px;
  font-weight: bold;
  padding-top: 14px;
}

.experience-label {
  text-shadow: 
    0px 0px 10px #b74b4b,  
    0px 0px 20px #b74b4b,  
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b;
  font-weight: bold;
}

.buttons {
  position: absolute;
  bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 150px;
}

.buttons button {
  border: .5px solid black;
  padding-top: 2.5px;
  border-radius: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px
}

.buttons img {
  width: 21px;
  height: 21px
}

.buttons button:disabled {
  background-color: gray;
  cursor: not-allowed;
}

.icon {
  width: 40px;
  height: 40px;
  display: block;
  margin: 5px auto;
}

.exp-container{
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
}

.hobby-label {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

.hobby-label p {
  text-shadow: 
    0px 0px 10px #b74b4b,  
    0px 0px 20px #b74b4b,  
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b; /* Adjust blur effect */
  font-weight: bold; /* Optional: Make text stand out more */
}

.hobby-boxes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.hobby-box {
  width: 90px;
  height: 70px;
  display: flex;
  background: black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.hobby-box:hover {
  background: #b74b4b;
}

.hobby-img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}

.hobby-description {
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