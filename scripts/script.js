const bubbleContainer = document.getElementById("bubble-container");

function spawnBubble() {
    const bubble = document.createElement("img");
    bubble.src = "/assets/bubble.webp"; // Use your own bubble image if needed
    bubble.classList.add("bubble");

    // Randomize size
    const size = Math.random() * 30 + 20; // 20px to 50px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Randomize position and speed
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 3; // 3 to 6 seconds
    bubble.style.left = `${left}px`;
    bubble.style.animationDuration = `${duration}s`;

    bubbleContainer.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener("animationend", () => {
        bubble.remove();
    });
}

// Spawn a bubble every 300ms
setInterval(spawnBubble, 5000);