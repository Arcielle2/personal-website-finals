<template>
<div class="container">
        <div class="sidebar">
            <div class="sidebar">Sidebar Top</div>
            <div class="contact">Contact</div>
            <div class="comment">Other</div>
        </div>

        <div class="main-content">
            <div class="box box1">E A ☀️</div>
            <div class="box box2">P G</div>
            <div class="box box3">H I ☀️</div>
            <div class="box box4">C ☀️</div>
        </div>

        <div class="sub-content">
            <div class="box box5">EX ☀️</div>
        </div>
    </div>
</template>

<script></script>
<style scoped>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  background: #110222;
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
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background-color: #452981;
  padding: 10px;
  border-radius: 15px;
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

.closed {
  transform: scaleY(0);
  opacity: 0;
  height: 0;
  overflow: hidden;
}

/* Box Sizes */
.box1 { width: 48.8%; height: 150px; }
.box2 { width: 48.8%; height: 150px; }
.box3 { width: 100%; height: 200px; }
.box4 { width: 100%; height: 200px; }
.box5 { width: 100%; height: 570px; }

/* Toggle Button */
.toggle-btn {
  cursor: pointer;
  width: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
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

  .main-content, .sub-content {
    width: 100%;
  }

  .box {
    width: 100%;
  }
}

/* Fade Transition for Opening and Closing */
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
  opacity: 0;
  transform: scale(0.8);
  pointer-events: none;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

/* When active, smoothly fade in and scale up */
.box.open .hidden-content {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

/* Fading effect for original box */
.box {
  transition: opacity 0.5s ease-in-out;
}

/* When opened, original box fades out */
.box.open {
  opacity: 0;
}
</style>