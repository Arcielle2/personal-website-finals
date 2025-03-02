<template>
  <div class="main">
  <header class="header">
    <div class="logo"><span>Arcielle Marie</span></div>
    <i class="bx bx-menu" id="menu-icon"></i>

    <nav class="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#education">Education</a>
      <a href="#course">Course</a>
      <a href="#experience">Experience</a>
      <a href="#goals">Goals in Life</a>
      <a href="#hobbies">Hobbies and Interests</a>
      <a href="#picture">Picture Gallery</a>
    </nav>
  </header>

  <section class="home">
    <div class="home-img">
      <img 
        src="https://arciellegercan.github.io/WEBPROG-SF231-Personal-Website/home/pictures/Media%20(3).jfif" 
        alt="Homepage Picture"
      />
    </div>
    <div class="home-content">
      <h1>Hi, I'm <span>Arcielle!</span></h1>
      <h3 class="text-animation">I'm a <span></span></h3>
      <p>
        My name is Arcielle Marie Gercan, you can call me Arcielle or Cielle! <br />
        I’m from Bulacan, and I have a fun, easy-going, and cheerful personality.
        I enjoy trying new things and finding exciting experiences, whether it’s learning something new or meeting great people like you.
        Feel free to explore my page!
      </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/arcielle-marie-gercan/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="LinkedIn">
        </a>
        <a href="https://github.com/ArcielleGercan" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733609.png" alt="GitHub">
        </a>
        <a href="https://www.facebook.com/arciellemcg/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/arxchmvri/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="Instagram">
        </a>
    </div>
      <router-link to="/about" class="btn">Get to know me more!</router-link>
      <p class="quote">~ Venture outside your comfort zone. The rewards are worth it ~</p>
      <p class="quote-author">— Rapunzel, Tangled</p>
    </div>
  </section>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: black;
  color: white;
  font-family: 'Poppins', Arial, sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: rgb(22, 22, 22);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.logo {
  font-size: 1.5rem;
  color: #b74b4b;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.logo span {
  text-shadow: 0 0 25px #b74b4b;
}

.navbar a {
  font-size: .9rem;
  color: white;
  margin-left: 2.2rem;
  font-weight: 450;
  transition: 0.3s ease;
  text-decoration: none; /* Removed default underline */
  border-bottom: 0px solid transparent; /* Ensures no underline when not active */
}

/* Fixed underline only appearing when hovered or active */
.navbar a:hover,
.navbar a.active {
  color: #b74b4b;
  border-bottom: 3px solid #b74b4b;
}

#menu-icon {
  font-size: 1.5rem;
  color: white;
  display: none;
}

@media (max-width: 995px) {
  nav {
      position: absolute;
      display: none;
      top: 0;
      right: 0;
      width: 40%;
      border-left: 3px solid #b74b4b;
      border-bottom: 3px solid #b74b4b;
      border-bottom-left-radius: 2rem;
      padding: 1rem;
      background-color: #161616;
  }

  nav.active {
      display: block;
  }

  nav a {
      display: block;
      font-size: 2rem;
      margin: 3rem 0;
  }

  nav a:hover,
  nav a.active {
      padding: 1rem;
      border-radius: 0.5rem;
      border-bottom: 0.5rem solid #b74b4b;
  }
}

section {
  min-height: 95vh;
  padding: 3rem 7%;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background-color: black;
}

.home .home-content h1 {
  font-size: 3rem;
  font-weight: 550;
  line-height: 0;
}

span {
  color: #b74b4b;
}

.home-content h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.home-content p {
  font-size: .8rem;
}

.home-img {
  border-radius: 50%;
}

.home-img img {
  position: relative;
  width: 30vw;
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
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: 0.1rem solid #b74b4b;
  border-radius: 50%;
  margin: 0.5rem 1rem 1.5rem 0;
  transition: 0.3s ease;
}

.social-icons a img {
  width: 1.5rem; /* Adjust icon size */
  height: 1.5rem;
  filter: invert(42%) sepia(72%) saturate(748%) hue-rotate(315deg) brightness(90%) contrast(85%);
  transition: 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.3) translateY(-5px);
  background-color: #b74b4b;
  box-shadow: 0 0 25px #b74b4b;
}

.social-icons a:hover img {
  filter: invert(0);
}

.btn {
  display: inline-block;
  padding: .6rem 2rem;
  background-color: black;
  border-radius: 4rem;
  font-size: 0.8rem;
  color: #b74b4b;
  letter-spacing: .14rem;
  font-weight: 800;
  border: 2px solid #b74b4b;
  transition: 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  transform: scale(1.03);
  background-color: #b74b4b;
  color: black;
  box-shadow: 0 0 25px #b74b4b;
}

/* Increased text animation size */
.text-animation {
  font-size: 2.2rem; /* Increased from 1.8rem */
  font-weight: 600;
  min-width: 280px;
}

.text-animation span {
  position: relative;
}

.text-animation span::before {
  content: "Libra";
  color: #b74b4b;
  animation: words 20s infinite;
}

.text-animation span::after {
  content: "";
  background-color: black;
  position: absolute;
  width: calc(100% + 8px);
  height: 100%;
  border-left: 3px solid black;
  right: -8px;
  animation: cursor 0.6s infinite, typing 20s steps(14) infinite;
}

@keyframes cursor {
  to {
      border-left: 2px solid #b74b4b;
  }
}

@keyframes words {
  0%, 20% {
      content: "INFJ";
  }
  21%, 40% {
      content: "Libra";
  }
  41%, 60% {
      content: "Computer Science student";
  }
  61%, 80% {
      content: "Libra";
  }
  81%, 100% {
      content: "INFJ";
  }
}

@keyframes typing {
  0%, 10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
      width: 0;
  }
  5%, 20%, 25%, 40%, 45%, 50%, 55%, 80%, 85% {
      width: calc(100% + 8px);
  }
}

@media (max-width: 1000px) {
  .home {
      gap: 4rem;
  }
}

@media (max-width: 995px) {
  .home {
      flex-direction: column;
      margin: 5rem 4rem;
  }

  .home .home-content h3 {
      font-size: 2.5rem;
  }

  .home-content h1 {
      font-size: 5rem;
  }

  .home-img img {
      width: 70vw;
      margin-top: 4rem;
  }
}

.quote {
  margin-top: 1rem; /* Space above the quote */
  margin-bottom: 0; /* Remove margin between quote and author */
  text-align: center;
  color: #b74b4b;
  font-style: italic;
  font-size: 1rem;
}

.quote-author {
  margin-top: 0; 
  margin-bottom: 1.5rem;
  font-size: .7rem;
  text-align: center;
  color: #b74b4b;
  font-style: italic;
}
</style>