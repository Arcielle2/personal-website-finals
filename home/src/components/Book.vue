<template>
  <Header />
  <section class="home">
    <div class="home-img">
      <img src="/pictures/Media (3).jfif" alt="Homepage Picture" />
    </div>
    <div class="home-content">
      <h1>Hi, I'm <span>Arcielle!</span></h1>
      <h3 class="text-animation">I'm a <span>{{ words[currentWordIndex] }}</span></h3>
      <p>
        My name is Arcielle Marie Gercan, you can call me Arcielle or Cielle! <br />
        I’m from Bulacan, and I have a fun, easy-going, and cheerful personality.
        I enjoy trying new things and finding exciting experiences, whether it’s learning something new or meeting great people like you.
        Feel free to explore my page!
      </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/arcielle-marie-gercan/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ArcielleGercan"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/arciellemcg/"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/arxchmvri/"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <a href="#Education" class="btn">Get to know me more!</a>
      <p class="quote"> ~ Venture outside your comfort zone. The rewards are worth it ~ </p>
      <p class="quote-author">Rapunzel, Tangled</p>
    </div>
  </section>
  <Footer />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    Header,
    Footer,
  },
  setup() {
    const words = ['INFJ', 'Libra', 'Computer Science Student', 'INFJ', 'Libra'];
    const currentWordIndex = ref(0);

    onMounted(() => {
      setInterval(() => {
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
      }, 4000);
    });

    return {
      words,
      currentWordIndex,
    };
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  font-family: 'Poppins', Arial, sans-serif;
}

html {
  font-size: 40%;
}

body {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: black;
  color: white;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: black;
}

.home .home-content h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.3;
}

span {
  color: #b74b4b;
}

.home-content h3 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.home-content p {
  font-size: 1.4rem;
}

.home-img img {
  width: 25vw;
  cursor: pointer;
  transition: 0.2s linear;
}

.home-img img:hover {
  transform: scale(1.1);
}

.social-icons a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid #b74b4b;
  font-size: 1.6rem;
  border-radius: 50%;
  margin: 2rem 1rem 2rem 0;
  color: #b74b4b;
  transition: 0.3s ease;
}

.social-icons a:hover {
  color: black;
  transform: scale(1.3) translateY(-5px);
  background-color: #b74b4b;
  box-shadow: 0 0 25px #b74b4b;
}
</style>
