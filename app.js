const homeBtn = document.querySelector("#homeBtn");
const paintingBtn = document.querySelector("#paintingBtn");
const webMobBtn = document.querySelector("#webMobBtn");
const contactBtn = document.querySelector("#contactBtn");

const getQuoteBtn = document.querySelector("#getQuoteBtn");

const heroSlide1 = document.querySelector("#heroSlide1");
const carouselBack1 = document.querySelector("#carouselBack1");
const carouselNext1 = document.querySelector("#carouselNext1");

const heroSlide2 = document.querySelector("#heroSlide2");
const carouselBack2 = document.querySelector("#carouselBack2");
const carouselNext2 = document.querySelector("#carouselNext2");

const heroSlide3 = document.querySelector("#heroSlide3");
const carouselBack3 = document.querySelector("#carouselBack3");
const carouselNext3 = document.querySelector("#carouselNext3");

homeBtn.addEventListener("click",
    (e) => {
        e.preventDefault()
        homeBtn.classList.add("active");

        paintingBtn.classList.remove("active");
        webMobBtn.classList.remove("active");
        contactBtn.classList.remove("active");
    }
)
paintingBtn.addEventListener("click",
    (e) => {
        e.preventDefault()
        paintingBtn.classList.add("active");
        
        homeBtn.classList.remove("active");
        webMobBtn.classList.remove("active");
        contactBtn.classList.remove("active");
    }
)
webMobBtn.addEventListener("click",
    (e) => {
        e.preventDefault()
        webMobBtn.classList.add("active");

        paintingBtn.classList.remove("active");
        homeBtn.classList.remove("active");
        contactBtn.classList.remove("active");
    }
)
contactBtn.addEventListener("click",
    (e) => {
        e.preventDefault()
        contactBtn.classList.add("active");

        paintingBtn.classList.remove("active");
        webMobBtn.classList.remove("active");
        homeBtn.classList.remove("active");
    }
)
getQuoteBtn.addEventListener("click",
    (e) => {
        e.preventDefault()
        contactBtn.classList.add("active");

        paintingBtn.classList.remove("active");
        webMobBtn.classList.remove("active");
        homeBtn.classList.remove("active");
    }
)

const navButtons = [homeBtn, paintingBtn, webMobBtn, contactBtn];
// DO THE ABOVE USING SIMPLER CODE.





//Activate carousel

carouselBack1.addEventListener("click", 
    () => {
        heroSlide1.classList.add("  ")
    }
)