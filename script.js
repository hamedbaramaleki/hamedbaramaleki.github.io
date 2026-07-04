// ===============================
// Hamed Baramaleki Portfolio v2.0
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});


// Navbar Shadow

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});


// Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="1s ease";

observer.observe(section);

});


// Active Menu

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-150;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Gallery Lightbox

const images=document.querySelectorAll(".gallery img");

images.forEach(image=>{

image.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";
overlay.style.cursor="zoom-out";

const photo=document.createElement("img");

photo.src=image.src;

photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="20px";
photo.style.boxShadow="0 0 50px rgba(212,175,55,.4)";

overlay.appendChild(photo);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

});

});


// Smooth Buttons

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(212,175,55,.15), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="0";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});


// Typing Effect

const quote=document.querySelector(".quote");

const text=quote.innerText;

quote.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

quote.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();
nav a.active{
color:#d4af37;
}