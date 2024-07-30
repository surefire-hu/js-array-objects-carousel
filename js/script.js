// Array di percorsi delle immagini
const images = [
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp'
];

const mainContainer = document.querySelector('.main-image-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
let currentIndex = 0;
// Funzione per creare il carosello
function createCarousel() {
    for (let i = 0; i < images.length; i++) {//ciclo
        const img = document.createElement('img');//creare tag img 
        img.src = images[i];//percorso img in base all array
        img.alt = `Immagine ${i + 1}`; //alt dell'img
        img.className = `carousel-image ${i == 0 ? 'active' : ''}`; //o attiva o vuoto
        mainContainer.appendChild(img);//img dentro in contenitore
        // Crea miniatura
        const thumbnail = document.createElement('img');
        thumbnail.src = images[i];
        thumbnail.alt = `Miniatura ${i + 1}`;
        thumbnail.className = `thumbnail ${i === 0 ? 'active' : ''}`;
        thumbnail.onclick = () => setActiveImage(i);
        thumbnailsContainer.appendChild(thumbnail);
    }

    const prevButton = document.createElement('button');//tag bottone 
    prevButton.className = 'carousel-button prev';//classe al bottone
    prevButton.textContent = '<';//testo del bottone
    prevButton.onclick = showPreviousImage;//funzione click
    mainContainer.appendChild(prevButton);//prevButton dentro il contenitore

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.textContent = '>';
    nextButton.onclick = showNextImage;
    mainContainer.appendChild(nextButton);
}

function setActiveImage(index) {
    const carouselImages = document.querySelectorAll('.carousel-image');//seleziona tutti gli elementi del carousel e lo fa diventare un array
    const thumbnails = document.querySelectorAll('.thumbnail');//seleziona tutti gli elementi del tumnail e lo fa diventare un array
    carouselImages[currentIndex].classList.remove('active');//rimuove classe active dell'elemento attuale
    thumbnails[currentIndex].classList.remove('active');

    currentIndex = index;


    carouselImages[currentIndex].classList.add('active');//abbina classe active
    thumbnails[currentIndex].classList.add('active');
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
    setActiveImage((currentIndex - 1 + images.length) % images.length);//seleziona elemento precedente
}

// Funzione per mostrare l'immagine successiva
function showNextImage() {
    setActiveImage((currentIndex + 1) % images.length);
}

createCarousel();