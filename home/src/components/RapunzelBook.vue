<template>
  <div class="container">
    <div class="book">
      <div class="cover left">
        <h1>Welcome to the Adventure!</h1>
        <p>Enjoy the magical journey of Rapunzel.</p>
      </div>
      <div :class="['cover right', { open: isOpen }]" @click="flipBook">
        <h1>Hello There!</h1>
        <p>Are you ready to get started?</p>
        <button class="continue-btn">Click to Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    flipBook() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://i.pinimg.com/736x/4f/a8/c5/4fa8c5e3c1e9f1f94bd124c2ca492124.jpg') no-repeat center center/cover;
}

.book {
  width: 400px;
  height: 500px;
  position: relative;
  perspective: 1200px;
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffcfdf;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: 'Parisienne', cursive;
  font-size: 28px;
  padding: 20px;
  transition: transform 1s;
  backface-visibility: hidden;
}

/* Left cover (Stays still) */
.left {
  background: #fbc2eb;
  z-index: 1;
}

/* Right cover (Flips open) */
.right {
  transform-origin: left;
  background: #ffcfdf;
  z-index: 2;
}

.right.open {
  transform: rotateY(-180deg);
}

.continue-btn {
  margin-top: 20px;
  padding: 12px 24px;
  background: #d291bc;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.continue-btn:hover {
  background: #c774a8;
}
</style>
