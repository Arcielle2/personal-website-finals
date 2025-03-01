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
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        if (!box.classList.contains("container")) { // Exclude the container itself
            // Create the toggle button
            const toggleButton = document.createElement("img");
            toggleButton.classList.add("toggle-btn");
            toggleButton.src = "lock-icon.png"; // Replace with actual lock image path
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
