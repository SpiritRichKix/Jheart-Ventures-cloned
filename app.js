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

const carMark11 = document.querySelector("#carMark11")
// const carMark12 = document.querySelector("#carMark12")
// const carMark13 = document.querySelector("#carMark13")
// const carMark21 = document.querySelector("#carMark21")
const carMark22 = document.querySelector("#carMark22")
// const carMark23 = document.querySelector("#carMark23")
// const carMark31 = document.querySelector("#carMark31")
// const carMark32 = document.querySelector("#carMark32")
const carMark33 = document.querySelector("#carMark33")

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







//Automatic Carousel

// windows load

function slide(slide1, slide2) {
    //Current Slide
    slide1.classList.add("hidden");
    slide1.classList.remove("show");

    //Next Slide
    slide2.classList.add("show");
    slide2.classList.remove("hidden");
    carMark22.classList.add("markersActive")
}

function slide1to2() {
    //Current Slide
    heroSlide1.classList.add("hidden");
    heroSlide1.classList.remove("show");

    //Next Slide
    heroSlide2.classList.add("show");
    heroSlide2.classList.remove("hidden");
    carMark22.classList.add("markersActive")
}

function slide2to3() {
    //Current Slide
    //Current Slide
    heroSlide2.classList.add("hidden");
    heroSlide2.classList.remove("show");

    //Next Slide
    heroSlide3.classList.add("show");
    heroSlide3.classList.remove("hidden");
    carMark22.classList.remove("markersActive")
    carMark33.classList.add("markersActive")
}

function slide3to1() {
    //Current Slide
    //Current Slide
    heroSlide3.classList.add("hidden");
    heroSlide3.classList.remove("show");

    //Previous Slide
    heroSlide1.classList.add("show");
    heroSlide1.classList.remove("hidden");
    carMark33.classList.remove("markersActive")
    carMark11.classList.add("markersActive")
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSlides() {
    while (true) {
        slide1to2();
        await delay(3000);

        slide2to3();
        await delay(3000);

        slide3to1();
        await delay(3000);
    }
}

runSlides();

//Activate carousel

carouselBack1.addEventListener("click",
    () => {
        heroSlide1.classList.add("hidden");
        heroSlide1.classList.remove("show");

        heroSlide3.classList.add("show");
        heroSlide3.classList.remove("hidden");

        carMark33.classList.add("markersActive")
    }
)

carouselNext1.addEventListener("click",
    () => {
        //Current Slide
        heroSlide1.classList.add("hidden");
        heroSlide1.classList.remove("show");

        //Next Slide
        heroSlide2.classList.add("show");
        heroSlide2.classList.remove("hidden");
        carMark22.classList.add("markersActive")
    }
)

carouselBack2.addEventListener("click",
    () => {
        //Current Slide
        heroSlide2.classList.add("hidden");
        heroSlide2.classList.remove("show");

        //Previous Slide
        heroSlide1.classList.add("show");
        heroSlide1.classList.remove("hidden");
        carMark11.classList.add("markersActive")
    }
)

carouselNext2.addEventListener("click",
    () => {
        //Current Slide
        heroSlide2.classList.add("hidden");
        heroSlide2.classList.remove("show");

        //Next Slide
        heroSlide3.classList.add("show");
        heroSlide3.classList.remove("hidden");
        carMark22.classList.remove("markersActive")
        carMark33.classList.add("markersActive")
    }
)

carouselBack3.addEventListener("click",
    () => {
        //Current Slide
        heroSlide3.classList.add("hidden");
        heroSlide3.classList.remove("show");

        //Previous Slide
        heroSlide2.classList.add("show");
        heroSlide2.classList.remove("hidden");
        carMark33.classList.remove("markersActive");
        carMark22.classList.add("markersActive");
    }
)

carouselNext3.addEventListener("click",
    () => {
        //Current Slide
        heroSlide3.classList.add("hidden");
        heroSlide3.classList.remove("show");

        //Previous Slide
        heroSlide1.classList.add("show");
        heroSlide1.classList.remove("hidden");
        carMark33.classList.remove("markersActive")
        carMark11.classList.add("markersActive")
    }
)



//ASYNCHRONOUS JS
setTimeout(() => {
    console.log("this is the first message");
}, 5000);
setTimeout(() => {
    console.log("this is the second message");
}, 3000);
setTimeout(() => {
    console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message

//

const interval = setInterval(() => {
    console.log("printed every 5 sec")
}, 5000);

console.log(interval)

setTimeout(() => {
    clearInterval(interval)
}, 50000)