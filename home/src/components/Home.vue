<template>
      <header class="header">
    <a href="#home" class="logo"><span>Arcielle Marie</span></a>
    <i class = 'bx bx-menu'[id=menu-icon]></i>
    
    <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#Education">Education</a>
        <a href="#Course">Course</a>
        <a href="#Experience">Experience</a>
        <a href="#Goals">Goals in Life</a>
        <a href="#Hobbies">Hobbies and Interest</a>
        <a href="#Picture">Picture Gallery</a>
    </nav>
  </header>

<section class="home">
  <div class="home-img">
      <img src="pictures/Media (3).jfif" alt="Homepage Picture">
  </div>
  <div class="home-content">
      <h1>Hi, I'm <span>Arcielle!</span></h1>
      <h3 class="text-animation">I'm a <span></span></h3>
      <p>My name is Arcielle Marie Gercan, you can call me Arcielle or Cielle! <br> I’m from Bulacan, and I have a fun, easy-going, and cheerful personality.
        I enjoy trying new things and finding exciting experiences, whether it’s learning something new or meeting great people like you.
        Feel free to explore my page!</p>
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
</template>

<script></script>

<style scoped>
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
        font-size: 50%;
    }

    body {
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        background-color: black;
        color: white;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 2rem 12%;
        background-color: rgb(22, 22, 22);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 5;
    }

    .logo {
        font-size: 3rem;
        color: #b74b4b;
        font-weight: 800;
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
        font-size: 1.8rem;
        color: white;
        margin-left: 4rem;
        font-weight: 500;
        transition: 0.3s ease;
        border-bottom: 3px solid transparent;
    }

    .navbar a:hover,
    .navbar a.active {
        color: #b74b4b;
        border-bottom: 3px solid #b74b4b;
    }

    #menu-icon {
        font-size: 3.6rem;
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
        min-height: 100vh;
        padding: 5rem 9%;
    }

    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        background-color: black;
    }

    .home .home-content h1 {
        font-size: 6rem;
        font-weight: 700;
        line-height: 1.3;
    }

    span {
        color: #b74b4b;
    }

    .home-content h3 {
        font-size: 4rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    .home-content p {
        font-size: 1.6rem;
    }

    .home-img {
        border-radius: 50%;
    }

    .home-img img {
        position: relative;
        width: 32vw;
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
        width: 4rem;
        height: 4rem;
        background-color: transparent;
        border: 0.2rem solid #b74b4b;
        font-size: 2rem;
        border-radius: 50%;
        margin: 3rem 1.5rem 3rem 0;
        transition: 0.3s ease;
        color: #b74b4b;
    }

    .social-icons a:hover {
        color: black;
        transform: scale(1.3) translateY(-5px);
        background-color: #b74b4b;
        box-shadow: 0 0 25px #b74b4b;
    }

    .btn {
        display: inline-block;
        padding: 1rem 2.8rem;
        background-color: black;
        border-radius: 4rem;
        font-size: 1.6rem;
        color: #b74b4b;
        letter-spacing: 0.3rem;
        font-weight: 600;
        border: 2px solid #b74b4b;
        transition: 0.3s ease;
        cursor: pointer;
    }

    .btn:hover {
        transform: scale(1.03);
        background-color: #b74b4b;
        color: black;
        box-shadow: 0 0 25px #b74b4b;
    }

    .text-animation {
        font-size: 34px;
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
        margin-top: 3rem;
        text-align: center;
        color: #b74b4b;
        font-style: italic;
        font-size: 1.6rem;
    }

    .quote-author {
        font-size: 1.4rem;
        text-align: center;
        color: #b74b4b;
        font-style: italic;
    }
</style>
