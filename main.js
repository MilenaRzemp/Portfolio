// const text2 = document.querySelector(".text2");
// const text3 = document.querySelector(".text3");
const anim = document.querySelectorAll(".anim")

// window.addEventListener("scroll", () => scanElements(text2));
// window.addEventListener("scroll", () => scanElements(text3));
window.addEventListener("scroll", () => scanElements(anim));

function scanElements(el) {
    // console.log(anim)
    el.forEach(element => {
        if(isVisible(element)) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }        
    });
}

function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -400;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}
// window.onload = () => document.querySelector(".text2").style.visibility = "hidden";

// const photo = document.querySelector(".photo");

// function photoAnimation () {
// photo.style.opacity = "0";
//     photo.animate({
//         opacity: "0"}, 500);
//     photo.delay(500).animate({
//             opacity: "1"}, 500);
// photo.delay(500).style.opacity = "1";
// }

// window.onload = photoAnimation();

const main = document.querySelector(".main-container");
const mainHeight = main.getBoundingClientRect();
console.log(mainHeight);

const skills = document.querySelector(".skills-container");
const skillsHeight = skills.getBoundingClientRect();
console.log(skillsHeight);