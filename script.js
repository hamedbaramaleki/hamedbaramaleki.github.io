// ===========================
// Hamed Baramalaki Portfolio
// ===========================

// نمایش نرم بخش‌ها هنگام اسکرول
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});
},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="all .8s ease";

observer.observe(section);

});

// منوی فعال
const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;
const offset=section.offsetTop-150;
const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// افکت کلیک روی عکس‌های گالری
const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.cursor="zoom-out";
overlay.style.zIndex="9999";

const photo=document.createElement("img");

photo.src=img.src;
photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="20px";
photo.style.boxShadow="0 0 40px rgba(212,175,55,.5)";

overlay.appendChild(photo);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

}

});

});