const bubbleContainer = document.getElementById("bubble-container");
const toggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

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

class Carousel {
  constructor(container, items) {
    this.container = container;
    this.items = items;
    this.currentIndex = 0;

    this.render();
    this.update();
  }

  render() {
    this.container.classList.add('carousel');

    this.image = document.createElement('img');
    this.image.className = 'carousel-image';

    this.description = document.createElement('div');
    this.description.className = 'carousel-description';

    const controls = document.createElement('div');
    controls.className = 'carousel-controls';

    this.prevButton = document.createElement('button');
    this.prevButton.className = 'carousel-button';
    this.prevButton.innerHTML = '&#9664;';
    this.prevButton.onclick = () => this.prev();

    this.nextButton = document.createElement('button');
    this.nextButton.className = 'carousel-button';
    this.nextButton.innerHTML = '&#9654;';
    this.nextButton.onclick = () => this.next();

    controls.appendChild(this.prevButton);
    controls.appendChild(this.nextButton);

    this.container.appendChild(this.image);
    this.container.appendChild(this.description);
    this.container.appendChild(controls);
  }

  update() {
    const item = this.items[this.currentIndex];
    this.image.src = item.src;
    this.description.innerHTML = item.description;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.update();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.update();
  }
}

const images = [
  {
    src: '/assets/trion.png',
    description: 'Website designed for Trion Supercars<br><a class="link" href="/projects/trion.html">Description</a> | <a class="link" href="https://cars-cart.netlify.app">Live Site</a> | <a class="link" href="https://github.com/CartWebApp/supercar-website-pm-the-winning-team">Code</a>',
  },
  {
    src: '/assets/tc.png',
    description: 'Clicker game based on the PC game World of Tanks<br><a class="link" href="/projects/tc.html">Description</a> | <a class="link" href="https://tankclicker.netlify.app">Live Site</a> | <a class="link" href="https://github.com/bear148/tanks_clicker">Code</a>'
  },
  {
    src: '/assets/md5.png',
    description: 'MD5 Reverse Hasher made for the game wordtwist.<br><a class="link" href="/projects/md5.html">Description</a>'
  },
  {
    src: '/assets/eecu.png',
    description: 'Budget calculator to help you budget your money.<br><a class="link" href="/projects/eecu.html">Description</a> | <a class="link" href="https://eecubudgetcart.netlify.app/">Live Site</a>'
  },
];

const container = document.getElementById('carousel-container');
new Carousel(container, images);


// Spawn a bubble every 300ms
setInterval(spawnBubble, 2500);