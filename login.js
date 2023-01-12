var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

//password open/close option
var state = false;
function toggle(){
    if (state){
        document.getElementById('contact-password').setAttribute("type", "password");
        document.getElementById('hide1').style.color = '#7a797e';
        state = false;
    }
    else{
        document.getElementById('contact-password').setAttribute("type", "text");
        document.getElementById('hide1').style.color = '#5887ef';
        state = true;
    }
}

var state1 = false;
function toggle11(){
    if (state1){
        document.getElementById('contact-password1').setAttribute("type", "password");
        document.getElementById('hide11').style.color = '#7a797e';
        state1 = false;
    }
    else{
        document.getElementById('contact-password1').setAttribute("type", "text");
        document.getElementById('hide11').style.color = '#5887ef';
        state1 = true;
    }
}


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