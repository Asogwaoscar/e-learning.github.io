
const tabsContainer = document.querySelector('.operations__tab-container');

const section2 = document.querySelector('#section--2');

const tabsContent = document.querySelectorAll('.operations__content');

const tabs = document.querySelectorAll('.operations__tab');

const faqs = document.querySelectorAll(".faq");

const toTop = document.querySelector('.to-top');

const section4 = document.querySelector('#section--4');

//Available course section

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    //Guard clause
    if (!clicked) return;

    //remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    //Activate Tab
    clicked.classList.add('operations__tab--active');

    //Activate content Area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//faq section

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


//scroll to top effect
const initialCoords4 = section4.getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (this.window.scrollY > initialCoords4.top) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }

})

//preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

//hamburger section

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
