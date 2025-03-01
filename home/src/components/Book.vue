<template>
  <div class="container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar">Sidebar Top</div>
      <div class="contact">Contact</div>
      <div class="comment">Other</div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <Box label="E A ☀️" />
      <Box label="P G" />
      <Box label="H I ☀️" large />
      <Box label="C ☀️" large />
    </div>

    <!-- Sub Content -->
    <div class="sub-content">
      <Box label="EX ☀️" extra-large />
    </div>
  </div>
</template>

<script>
import Box from "@/components/Box.vue";

export default {
  components: { Box },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  font-family: 'Poppins', sans-serif;
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
}
</style>
