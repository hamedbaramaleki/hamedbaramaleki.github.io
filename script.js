// =======================================
// Hamed Baramaleki Portfolio v3
// =======================================

// Loader
window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

},1500);

});

// Navbar Blur

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.75)";
header.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.35)";
header.style.boxShadow="none";

}

});

// Scroll Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition=".9s ease";

observer.observe(section);

});

// Active Menu

const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-150;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.id;

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Top

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Gallery Lightbox

const lightbox=document.querySelector(".lightbox");

const lightboxImg=lightbox.querySelector("img");

const closeBtn=document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeBtn.onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

// Typing Effect

const quote=document.querySelector(".hero-text p");

const text=quote.innerText;

quote.innerHTML="";

let i=0;

function type(){

if(i<text.length){

quote.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="260px";
glow.style.height="260px";
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

// Parallax Hero

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero-image img");

hero.style.transform=`translateY(${window.scrollY*0.08}px)`;

});

// Social Hover Animation

document.querySelectorAll(".hero-social a,.footer-social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-6px) scale(1.1)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) scale(1)";

});

});