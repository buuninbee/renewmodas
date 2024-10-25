const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

const carouselCards = document.getElementById('carrosselCards');
const prevBtnCards = document.getElementById('prevBtnCards');
const nextBtnCards = document.getElementById('nextBtnCards');
let currentIndexCard = 0;

const carouselFeedBacks = document.getElementById('carroselFeedBacks');
const prevBtnFeedBacks = document.getElementById('prevBtnFeedBacks');
const nextBtnFeedBacks = document.getElementById('nextBtnFeedBacks');
let currentIndexFeedBacks = 0;


nextBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reinicia no primeiro card
    }
    const width = items[currentIndex].offsetWidth;
    carousel.scrollTo({
        left: width * currentIndex,
        behavior: 'smooth',
    });
});

prevBtn.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1; // Volta ao último card
    }
    const width = items[currentIndex].offsetWidth;
    carousel.scrollTo({
        left: width * currentIndex,
        behavior: 'smooth',
    });
});

nextBtnCards.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-card');
    if (currentIndexCard < items.length - 1) {
        currentIndexCard++;
    } else {
        currentIndexCard = 0; // Reinicia no primeiro card
    }
    const width = items[currentIndexCard].offsetWidth;
    carouselCards.scrollTo({
        left: width * currentIndexCard,
        behavior: 'smooth',
    });
    console.log(carouselCards)
});

prevBtnCards.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-card');
    if (currentIndexCard > 0) {
        currentIndexCard--;
    } else {
        currentIndexCard = items.length - 1; // Volta ao último card
    }
    const width = items[currentIndexCard].offsetWidth;
    carouselCards.scrollTo({
        left: width * currentIndexCard,
        behavior: 'smooth',
    });
});

nextBtnFeedBacks.addEventListener('click', () => {
    const items = document.querySelectorAll('.carouselFeedBacks');
    if (currentIndexFeedBacks < items.length -1) {
        currentIndexFeedBacks++;
    } else {
        currentIndexFeedBacks = 0; // Reinicia no primeiro card
    }
    const width = items[currentIndexFeedBacks].offsetWidth;
    carouselFeedBacks.scrollTo({
        left: width * currentIndexFeedBacks,
        behavior: 'smooth',
    });
    console.log(carouselFeedBacks)
});

prevBtnFeedBacks.addEventListener('click', () => {
    const items = document.querySelectorAll('.carouselFeedBacks');
    if (currentIndexFeedBacks > 0) {
        currentIndexFeedBacks--;
    } else {
        currentIndexFeedBacks = items.length -1; // Volta ao último card
    }
    const width = items[currentIndexFeedBacks].offsetWidth;
    carouselFeedBacks.scrollTo({
        left: width * currentIndexFeedBacks,
        behavior: 'smooth',
    });
    console.log("pegou")
});