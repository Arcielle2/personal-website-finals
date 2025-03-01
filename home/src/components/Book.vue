<template>
  <div class="container">
    <div class="main-sidebar">
      <div class="sidebar">
        <img :src="images[currentImage]" alt="Slideshow Image" class="slideshow-img" />
      </div>
      <div class="contact">
        <a href="https://www.linkedin.com/in/arcielle-marie-gercan/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ArcielleGercan"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/arciellemcg/"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/arxchmvri/"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>

    <div class="main-content">
      <div class="box box1">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(0)" />
        <div class="hidden-content" v-if="openBoxes[0]">Additional Content</div>
      </div>
      <div class="box box2">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(1)" />
        <div class="hidden-content" v-if="openBoxes[1]">Additional Content</div>
      </div>
      <div class="box box3">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(2)" />
        <div class="hidden-content" v-if="openBoxes[2]">Additional Content</div>
      </div>
      <div class="box box4">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(3)" />
        <div class="hidden-content" v-if="openBoxes[3]">Additional Content</div>
      </div>
    </div>

    <div class="sub-content">
      <div class="box box5">
        <img class="toggle-btn" :src="sunImage" alt="Toggle Icon" @click="toggleBox(4)" />
        <div class="hidden-content" v-if="openBoxes[4]">Additional Content</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import sunImage from "@/components/sun.jfif"; // Import sun image

// Importing Slideshow Images from src/components/
import img1 from "@/components/1.jfif";
import img2 from "@/components/2.jfif";
import img3 from "@/components/3.jfif";
import img4 from "@/components/4.jfif";
import img5 from "@/components/5.jfif";
import img6 from "@/components/6.jfif";

// Store images in an array
const images = ref([img1, img2, img3, img4, img5, img6]);

// Slideshow logic
const currentImage = ref(0);
let interval = null;

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.value.length; // Cycle through images
};

// Auto-slide every 2 seconds
onMounted(() => {
  interval = setInterval(nextImage, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});

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
  flex-direction: column;
  width: 30%;
  background-color: #452981;
  padding: 20px;
  border-radius: 15px;
  align-content: center;
}

/* Slideshow */
.sidebar {
  width: 355px;
  height: 200px;
  border: 0.5rem solid #e4d4fc;
  border-radius: 10px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(138, 43, 226, 0.7);
}

.slideshow-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
}

/* Contact Section */
.contact {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.contact a {
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease-in-out;
}

.contact a:hover {
  color: #ffd700;
  text-shadow: 0 0 10px #ffd700;
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
}

/* Box Sizes */
.box1 {
  width: 48.8%;
  height: 150px;
}
.box2 {
  width: 48.8%;
  height: 150px;
}
.box3 {
  width: 100%;
  height: 200px;
}
.box4 {
  width: 100%;
  height: 200px;
}
.box5 {
  width: 100%;
  height: 570px;
}

/* Toggle Button */
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
  background-color: #e4d4fc;
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

  .sidebar {
    width: 100%;
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
