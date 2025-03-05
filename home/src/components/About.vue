<template>
  <router-link to="/" class="btn">
  <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="Back to Home" class="btn-image" />
  Back to Home!
</router-link>
  <div class="container">
    <div class="main-sidebar" :class="{ 'surprise-effect': isSurprise }">
      <div class="main-header">
        <h1>{{ mainHeader }}</h1>
      </div>
      <div class="sidebar">
        <div v-if="!courseDescription" class="image-container">
          <div v-if="!hobbyDescription" class="image-container">
              <div v-if="currentView === 'source'">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT Logo" class="chatgpt-logo" />
                <br />
                <a href="https://pierrelouis.webflow.io/" target="_blank">Pierre Louis Web</a>
              </div>
              <h2 v-if="currentView === 'surprise'">🎉 Surprise! 🎉</h2>
          <img :src="selectedImage" alt="Sidebar Image" class="sidebar-img" />
          <img v-if="showHiImage" :src="hiImage" alt="Overlay Image" class="overlay-img" />
          </div>
        </div>
        <p v-else class="sidebar-text">{{ courseDescription }}</p>
      </div>
      <div class="main-buttons">
        <div class="source"  @click="showSource"> </div>
        <div class="surprise"  @click="triggerSurprise"> </div>
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
            <div class="group-boxes">
              <div class="group-box" @click="changeSidebarImage(Education)">
                <img :src="g3" alt="Education" class="group-img" />
              </div>
              <div class="group-box" @click="changeSidebarImage(Goals)">
                <img :src="g2" alt="Goals" class="group-img" />
              </div>
              <div class="group-box" @click="changeSidebarImage(Achievements)">
                <img :src="g1" alt="Achievements" class="group-img" />
              </div>
            </div>
          </div>
        </div>


      <div class="box box4">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(3)" />
        <div class="hidden-content" v-if="openBoxes[3]">
          <img class="back-btn" src="https://cdn-icons-png.flaticon.com/128/271/271220.png" @click="toggleBox(3)" />
          <div class="hobby-label"><p>Hobbies and Interests</p></div>
            <div class="hobby-boxes">
              <div class="hobby-box" @click="changeSidebarImage(hobby1Text)">
                <img :src="h1" alt="Hobby 1" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby2Text)">
                <img :src="h2" alt="Hobby 2" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby3Text)">
                <img :src="h3" alt="Hobby 3" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby4Text)">
                <img :src="h4" alt="Hobby 4" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby5Text)">
                <img :src="h5" alt="Hobby 5" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby6Text)">
                <img :src="h6" alt="Hobby 6" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby7Text)">
                <img :src="h7" alt="Hobby 7" class="hobby-img" />
              </div>
              <div class="hobby-box" @click="changeSidebarImage(hobby8Text)">
                <img :src="h8" alt="Hobby 8" class="hobby-img" />
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
          <div class="last-page">
          <div class="pg-label"><p>Picture Gallery</p></div>
          
          <div class="image-display">
            <img :src="galleryImages[currentImageIndex]" alt="Gallery Image" class="gallery-img" />
          </div>
          
          <div class="gallery-buttons">
            <button @click="prevImage" :disabled="currentImageIndex === 0">
              <img src="https://cdn-icons-png.flaticon.com/128/318/318477.png" alt="Previous" />
            </button>
            <button @click="nextImage" :disabled="currentImageIndex === galleryImages.length - 1">
              <img src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="Next" />
            </button>
            <button @click="resetGallery">
              <img src="https://cdn-icons-png.flaticon.com/128/2618/2618245.png" alt="Reset" />
            </button>
          </div>

          <div class="comment-container">
            <h1>🎀Leave a Comment!🎀</h1>
            <!-- Avatar Selection -->
            <p class="avatar-label">Select an avatar:</p>
            <div class="avatar-selection">
              <div v-for="(avatar, index) in avatars" :key="index" class="avatar-container">
                <input type="radio" v-model="newComment.avatar" :value="avatar" :id="'avatar' + index" class="hidden-radio" />
                <label :for="'avatar' + index">
                  <img :src="avatar" class="avatar-option" :class="{ selected: newComment.avatar === avatar }" />
                </label>
              </div>
            </div>

            <!-- Comment Section -->
            <div class="comment-section">
              <input type="text" v-model="newComment.name" placeholder="Your Name" />
              <textarea v-model="newComment.comment" placeholder="Write a comment..."></textarea>
              <button @click="submitComment">Post Comment</button>

              <ul class="comment-list">
                <li v-for="comment in comments" :key="comment.id" class="comment-item">
                  <div class="comment-header">
                    <img :src="comment.avatar" alt="Avatar" class="avatar" />
                    <div class="comment-details">
                      <strong>{{ comment.name }}</strong>
                      <p>{{ comment.comment }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          </div> <!-- ✅ Properly closed comment-container -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { supabase } from '../lib/supabaseClient';
import sunImage from "@/assets/ribbon.jfif";
import defaultImage from "@/assets/bubu.jfif"; // Default sidebar image
import hiImage from "@/assets/hi.jfif"; // Overlay image
import c1 from "@/assets/c1.jfif";
import c2 from "@/assets/c2.jfif";
import h1 from "@/assets/h1.jfif";
import h2 from "@/assets/h2.jfif";
import h3 from "@/assets/h3.jfif";
import h4 from "@/assets/h4.jfif";
import h5 from "@/assets/h5.jfif";
import h6 from "@/assets/h6.jfif";
import h7 from "@/assets/h7.jfif";
import h8 from "@/assets/h8.jfif";
import g1 from "@/assets/g1.jfif";
import g2 from "@/assets/g2.jfif";
import g3 from "@/assets/g3.jfif";
import avatar1 from "@/assets/avatar1.jfif";
import avatar2 from "@/assets/avatar2.jfif";
import avatar3 from "@/assets/avatar3.jfif";
import avatar4 from "@/assets/avatar4.jfif";
import avatar5 from "@/assets/avatar5.jfif";
import avatar6 from "@/assets/avatar6.jfif";
import pic1 from "@/assets/pic1.jfif";
import pic2 from "@/assets/pic2.jfif";
import pic3 from "@/assets/pic3.jfif";
import pic4 from "@/assets/pic4.jfif";
import pic5 from "@/assets/pic5.jfif";
import pic6 from "@/assets/pic6.jfif";
import pic7 from "@/assets/pic7.jfif";
import pic8 from "@/assets/pic8.jfif";
import pic9 from "@/assets/pic9.jfif";
import pic10 from "@/assets/pic10.jfif";
import pic11 from "@/assets/pic11.jfif";
import pic12 from "@/assets/pic12.jfif";
import pic13 from "@/assets/pic13.jfif";
import pic14 from "@/assets/pic14.jfif";
import pic15 from "@/assets/pic15.jfif";

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

const Education = "Eating Foods. I enjoy discovering new flavors and indulging in comfort food.";
const Achievements = "Watching Movies. Movies transport me to new adventures, letting me experience stories from diverse perspectives.";
const Goals = "Designing. Designing allows me to channel my creativity and bring ideas to life in a visually appealing way.";

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

const galleryImages = ref([
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10,
  pic11, pic12, pic13, pic14, pic15
]);

const currentImageIndex = ref(0);

// Next Image
const nextImage = () => {
  if (currentImageIndex.value < galleryImages.value.length - 1) {
    currentImageIndex.value++;
  }
};

// Previous Image
const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Reset Gallery
const resetGallery = () => {
  currentImageIndex.value = 0;
};

const comments = ref([]);
const avatars = ref([avatar2, avatar3, avatar4, avatar6]);
const newComment = ref({ name: '', comment: '', avatar: avatars.value[0] });

async function getComments() {
  const { data, error } = await supabase.from('comments').select('*');
  if (error) {
    console.error('Error fetching comments:', error);
    return;
  }
  comments.value = data;
}

async function submitComment() {
  if (!newComment.value.name || !newComment.value.comment) return;
  const { data, error } = await supabase.from('comments').insert([newComment.value]).select();
  if (!error && data) {
    comments.value.push(data[0]);
    newComment.value = { name: '', comment: '', avatar: avatars.value[0] };
  }
}

onMounted(() => {
  getComments();
});

const mainHeader = ref(""); // Updates the main header
const currentView = ref(""); // Tracks which sidebar content is active
const isSurprise = ref(false);

const showSource = () => {
  mainHeader.value = "Sources"; 
  currentView.value = "source";
  isSurprise.value = false;
  
  // Hide sidebar content completely
  selectedImage.value = ""; // Set to empty string instead of null
  showHiImage.value = false;
  hobbyDescription.value = "";
  courseDescription.value = "";

  // Ensure sidebar has no elements left
  document.querySelector(".sidebar").innerHTML = "";
};

const triggerSurprise = () => {
  mainHeader.value = "Surprise!";
  currentView.value = "surprise";
  isSurprise.value = true;

  setTimeout(() => {
    isSurprise.value = false;
    mainHeader.value = "";
  }, 10000);
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-buttons{
  display: flex;
  gap: 5px;
  justify-content: right;
}

.source {
  border: 2px solid #1f2122;
  background: #1f2122;
  border-radius: 20px;
  width: 30px;
  height:30px;
}

.surprise {
  border: 2px solid #1f2122;
  background: #1f2122;
  border-radius: 20px;
  width: 30px;
  height:30px;
}

/* ChatGPT Logo */
.chatgpt-logo {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}

.source:hover, .surprise:hover {
  background: whitesmoke;
}

.surprise-effect {
  animation: color-change 10s linear infinite;
}
@keyframes color-change {
  0% { background: #b74b4b; }
  10% { background: #ff5733; }
  20% { background: #ffbd33; }
  30% { background: #33ff57; }
  40% { background: #33a1ff; }
  50% { background: #a133ff; }
  60% { background: #ff33a8; }
  70% { background: #ff3333; }
  80% { background: #33fff0; }
  90% { background: #ffd133; }
  100% { background: #b74b4b; }
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px; 
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-left: 40px;
  margin-top: 18px;
  margin-bottom:10px;
  border-radius: 10px;
  font-family: 'Public Pixel', sans-serif;
  font-size: 11px;
}

.btn-image {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1)
}

.container {
  display: flex;
  padding: 10px;
  height: 90vh;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.main-sidebar {
  width: 30%;
  height: 570px;
  background-color: #b74b4b;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
}

.main-header{
  display: flex;
  width: 100%;
  height: 4rem;
  border:10px solid #15191d;
  border-radius: 10px;
  background: #1f2122;
  font-family: 'Public Pixel', sans-serif;
  font-size: 18px;
  align-items: center;
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
  height: auto;
}

.box {
  background-color: black;
  border-radius: 15px;
  border: 3px solid rgba(238, 238, 238, 0.2);
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  transition: transform 0.5s ease, opacity 0.5s ease;
  color: black;
  font-size: 8px;
}

.box1, .box2 {
  width: calc(50% - 5px);
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

.course-box:hover{
  transition: transform 0.5s ease;
  transform: scale(1.1);
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

.buttons button:hover {
  background: #b74b4b;
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

.hobby-img:hover {
  filter: brightness(0);
}

.hobby-img {
  width: 40px;
  height: 40px;
  border-radius: 10px;
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

.hidden-content.last-page {
  width: 30%;
  height: 570px;
  background-color: rgb(231, 231, 231);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
}

.group-boxes {
  display: flex;
  gap: 15px;
}

.group-box {
  width: 130px;
  height: 130px;
  display: flex;
  background: whitesmoke;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px 6px #b74b4b;
}

.group-box:hover{
  transition: transform 0.5s ease;
  transform: scale(1.1);
}

.group-img {
  width: 50px;
  height: 50px;
  background: whitesmoke;
  border-radius: 10px;
}

.pg-label {
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
}

.pg-label p {
  text-shadow: 
    0px 0px 10px #b74b4b,  
    0px 0px 20px #b74b4b,  
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b; /* Adjust blur effect */
  font-weight: bold; /* Optional: Make text stand out more */
}

.gallery-img {
  width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  border: 10px solid #b74b4b;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.gallery-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.gallery-buttons button {
  background: none;
  border: none;
  cursor: pointer;
}

.gallery-buttons img {
  width: 20px;
  height: 20px;
  transition: transform 0.2s;
  margin-bottom: 10px;
}

.gallery-buttons img:hover {
  transform: scale(1.1);
}

button:disabled img {
  opacity: 0.5;
  cursor: not-allowed;
}

.box5 {
  font-size: 12px;
  color: black;
  margin-bottom: 10px;
}

.box5 h1 {
  text-shadow: 
    0px 0px 10px #b74b4b,  
    0px 0px 20px #b74b4b,  
    0px 0px 30px #b74b4b,
    0px 0px 40px #b74b4b,
    0px 0px 50px #b74b4b;
  font-weight: bold;
}

.comment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  gap: 15px;
  height: 250px;
  overflow-y: auto;
  font-family: 'Poppins', sans-serif;
}

.comment-container p{
  font-size: 12px;
}

.avatar-selection {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 80px;
}

.avatar-container {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  gap: 10px; 
  justify-content: center;
}

.hidden-radio {
  display: none;
}

.avatar-option {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: 3px solid transparent;
  align-items: center;
  justify-content: center;
}

.avatar-option:hover{
  border-color: #b74b4b;
  transition: transform 0.5s ease;
  transform: scale(1.1);
}

.hidden-radio:checked + label .avatar-option {
  border-color: #b74b4b;
}

.comment-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.comment-section input,
.comment-section textarea {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #b74b4b;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
}

.comment-section button {
  width: 95%;
  padding: 10px;
  background: #b74b4b;
  color: whitesmoke;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
}

.comment-list {
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  padding: 3px;
  background: black;
  align-items: left;
  color: white;
}

.comment-item {
  display: flex;
  align-items: left;
  padding: 10px 0;
  border-bottom: 2px solid #b74b4b;
}

.comment-header {
  display: flex;
  align-items: left;
  width: 100%;
}

.comment-header .avatar {
  width: 50px;
  height: 50px;
  border: 2px solid #b74b4b;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: 20px;
}

.comment-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-items: center;
}

/* Scrollbar Styling */
.comment-container::-webkit-scrollbar {
  width: 8px;
}

.comment-container::-webkit-scrollbar-thumb {
  background: #b74b4b;
  border-radius: 10px;
}


.comment-container::-webkit-scrollbar-track {
  background: whitesmoke;
}
</style>