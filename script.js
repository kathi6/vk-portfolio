'use strict'
function desk(){
const home = document.getElementById("desk");
const navlinks = document.querySelectorAll(".nav-links li a");
navlinks.forEach(link => {
    if(onclick == desk){
        navlinks.toggleAttribute("smooth-scroll");
    } else{
        navlinks.removeAttribute("smooth-scroll")
    }
})
}


document.querySelectorAll(".project-container img").forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
    })
    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    })
})


