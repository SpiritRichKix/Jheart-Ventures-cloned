const homeBtn = document.querySelector("#homeBtn");
const paintingBtn = document.querySelector("#paintingBtn");
const webMobBtn = document.querySelector("#webMobBtn");
const contactBtn = document.querySelector("#contactBtn");

const getQuoteBtn = document.querySelector("#getQuoteBtn");

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
// DO THE ABOVE USIG SIMPLER CODE.