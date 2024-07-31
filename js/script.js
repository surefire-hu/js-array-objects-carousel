// Array di percorsi delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentIndex = 0;
let isPlaying = false;
let direction = 1;
let intervalId = null;

const mainImage = document.getElementById('mainImage');
const imageTitle = document.getElementById('imageTitle');
const imageText = document.getElementById('imageText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const directionBtn = document.getElementById('directionBtn');
const thumbnails = document.getElementById('thumbnails');

function updateImage() {
  const currentImage = images[currentIndex];
  mainImage.src = currentImage.image;
  mainImage.alt = currentImage.title;
  imageTitle.textContent = currentImage.title;
  imageText.textContent = currentImage.text;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.classList.toggle('active', index == currentIndex);
  });
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function setActive(index) {
  currentIndex = index;
  updateImage();
}

function toggleAutoplay() {
  if (isPlaying) {
    clearInterval(intervalId);
    playPauseBtn.textContent = 'Start Autoplay';
  } else {
    intervalId = setInterval(() => {
      direction == 1 ? next() : prev();
    }, 3000);
    playPauseBtn.textContent = 'Stop Autoplay';
  }
  isPlaying = !isPlaying;
}

toggleAutoplay();

function toggleDirection() {
  direction *= -1;
  directionBtn.innerHTML = `Change Direction ${direction == 1 ? '<i class="fa-solid fa-arrow-right"></i>' : '<i class="fa-solid fa-arrow-left"></i>'}`;
}

// Creare thumbnails
images.forEach((image, index) => {
  const thumb = document.createElement('img');
  thumb.src = image.image;
  thumb.alt = image.title;
  thumb.classList.add('thumbnail');
  thumb.addEventListener('click', () => setActive(index));
  thumbnails.appendChild(thumb);
});

// tutti i click
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
playPauseBtn.addEventListener('click', toggleAutoplay);
directionBtn.addEventListener('click', toggleDirection);

updateImage();