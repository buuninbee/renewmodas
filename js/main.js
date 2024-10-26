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


// animação do menu

const menuOpen = document.getElementById("btnMenuOpen")
const menuClose = document.getElementById("btnMenuClose")


const navG = document.getElementById("navG")
const navP = document.getElementById("navP")

const tets1 = document.getElementById("test1")
const tets2 = document.getElementById("test2")



menuOpen.addEventListener("click", (e) =>{
    e.preventDefault()
    if (navG.classList.contains("flex")) {
        navG.classList.add("hidden")
        navP.classList.remove("hidden")
        navP.classList.add("grid")
    } else{
        navG.classList.add("flex")
    }
})

menuClose.addEventListener("click", () =>{
    // e.preventDefault()
    if (navP.classList.contains("grid")) {
        navG.classList.remove("hidden")
        navG.classList.add("flex")
        navP.classList.remove("grid")
        navP.classList.add("hidden")
    } else{
        navP.classList.add("grid")
    }

    
})