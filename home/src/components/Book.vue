<template>
  <div class="container">
    <div class="sidebar">
      <div class="sidebar">Sidebar Top</div>
      <div class="contact">Contact</div>
      <div class="comment">Other</div>
    </div>

    <div class="main-content">
      <div class="box box1">
        E A ☀️
        <img class="toggle-btn" src="/src/components/sun.jfif" alt="Lock Icon" @click="toggleBox(0)" />
        <div class="hidden-content" v-if="openBoxes[0]">Additional Content</div>
      </div>
      <div class="box box2">
        P G
        <img class="toggle-btn" src="/src/components/sun.jfif" alt="Lock Icon" @click="toggleBox(1)" />
        <div class="hidden-content" v-if="openBoxes[1]">Additional Content</div>
      </div>
      <div class="box box3">
        H I ☀️
        <img class="toggle-btn" src="/src/components/sun.jfif" alt="Lock Icon" @click="toggleBox(2)" />
        <div class="hidden-content" v-if="openBoxes[2]">Additional Content</div>
      </div>
      <div class="box box4">
        C ☀️
        <img class="toggle-btn" src="/src/components/sun.jfif" alt="Lock Icon" @click="toggleBox(3)" />
        <div class="hidden-content" v-if="openBoxes[3]">Additional Content</div>
      </div>
    </div>

    <div class="sub-content">
      <div class="box box5">
        EX ☀️
        <img class="toggle-btn" src="/src/components/sun.jfif" alt="Lock Icon" @click="toggleBox(4)" />
        <div class="hidden-content" v-if="openBoxes[4]">Additional Content</div>
      </div>
    </div>
  </div>
</template>

<script setup>
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        if (!box.classList.contains("container")) { // Exclude the container itself
            // Create the toggle button
            const toggleButton = document.createElement("img");
            toggleButton.classList.add("toggle-btn");
            toggleButton.src = "/src/components/sun.jfif";
            toggleButton.alt = "Sun Icon";
            toggleButton.style.cursor = "pointer";
            toggleButton.style.width = "40px";
            toggleButton.style.position = "absolute";
            toggleButton.style.top = "50%";
            toggleButton.style.left = "50%";
            toggleButton.style.transform = "translate(-50%, -50%) scale(0.8)";
            toggleButton.style.transition = "box-shadow 0.5s ease-in-out, opacity 0.5s ease-in-out";
            box.appendChild(toggleButton);

            // Create hidden content
            const hiddenContent = document.createElement("div");
            hiddenContent.classList.add("hidden-content");
            hiddenContent.style.position = "absolute";
            hiddenContent.style.top = "0";
            hiddenContent.style.left = "0";
            hiddenContent.style.width = "100%";
            hiddenContent.style.height = "100%";
            hiddenContent.style.backgroundColor = "#e4d4fc";
            hiddenContent.style.borderRadius = "15px";
            hiddenContent.style.display = "flex";  // Set to flex but hidden initially
            hiddenContent.style.justifyContent = "center";
            hiddenContent.style.alignItems = "center";
            hiddenContent.style.textAlign = "center";
            hiddenContent.style.opacity = "0";  // Start invisible
            hiddenContent.style.visibility = "hidden";  // Hide it from interactions
            hiddenContent.style.transition = "opacity 0.5s ease-in-out, visibility 0s linear 0.5s";
            hiddenContent.innerHTML = "<p>Additional Content</p>";

            box.appendChild(hiddenContent);

            // Toggle button event
            toggleButton.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent event bubbling
                box.classList.toggle("open");

                // Glow effect on click
                toggleButton.style.boxShadow = "0 0 20px 8px rgba(255, 223, 0, 0.8)";

                setTimeout(() => {
                    toggleButton.style.boxShadow = "none"; // Remove glow after 0.5s
                }, 500);

                if (box.classList.contains("open")) {
                    hiddenContent.style.visibility = "visible";
                    hiddenContent.style.opacity = "1";
                    hiddenContent.style.transition = "opacity 0.5s ease-in-out, visibility 0s linear 0s"; // Remove delay

                    // Hide other content inside the box except the hidden content
                    box.querySelectorAll(":scope > *:not(.hidden-content):not(.toggle-btn)").forEach(child => {
                        child.style.display = "none";
                    });
                } else {
                    hiddenContent.style.opacity = "0"; 
                    hiddenContent.style.transition = "opacity 0.5s ease-in-out, visibility 0s linear 0.5s"; // Delay visibility hiding

                    setTimeout(() => {
                        hiddenContent.style.visibility = "hidden";

                        // Restore other box content
                        box.querySelectorAll(":scope > *:not(.hidden-content):not(.toggle-btn)").forEach(child => {
                            child.style.display = "";
                        });
                    }, 500);
                }
            });
        }
    });
});

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

/* Box Sizes */
.box1 { width: 48.8%; height: 150px; }
.box2 { width: 48.8%; height: 150px; }
.box3 { width: 100%; height: 200px; }
.box4 { width: 100%; height: 200px; }
.box5 { width: 100%; height: 570px; }

/* Toggle Button - Centered */
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

  .main-content, .sub-content {
    width: 100%;
  }

  .box {
    width: 100%;
  }
}
</style>
