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

<script setup>
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        if (!box.classList.contains("container")) { // Exclude the container itself
            // Create the toggle button
            const toggleButton = document.createElement("img");
            toggleButton.classList.add("toggle-btn");
            toggleButton.src = "./components/sun.jfif";
            toggleButton.alt = "Lock Icon";
            toggleButton.style.cursor = "pointer";
            toggleButton.style.width = "40px";
            toggleButton.style.position = "absolute";
            toggleButton.style.top = "10px";
            toggleButton.style.left = "50%";
            toggleButton.style.transform = "translateX(-50%) scale(0.8)";
            toggleButton.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
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
</style>