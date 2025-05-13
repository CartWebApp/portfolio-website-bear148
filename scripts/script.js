const bubbleContainer = document.getElementById("bubble-container");
const toggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

let container = document.getElementById('container');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let scrollArea = 1000 - windowHeight;
let fish1 = document.getElementById('clownfish');
let fish2 = document.getElementById('bluetang');

// window.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || window.scrollTop;
//   var scrollPercent = scrollTop/scrollArea || 0;

//   fish1.style.left = scrollPercent*window.innerWidth + 'px';
//   fish2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
// });

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

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Spawn a bubble every 300ms
setInterval(spawnBubble, 2500);