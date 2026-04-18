//reference navbar
const nav = document.querySelector("nav");
const mobileMenuIcon = document.querySelector("#mobileMenuIcon .fa-bars");
const mobileMenuContainer = document.getElementById("mobileMenuContainer");
const cardContainer = document.getElementById("cardContainer")
const futureCardContainer = document.getElementById("futureCardContainer")

//event listener for mobile menu icon
mobileMenuIcon.addEventListener("click", () => {
  toggleMobileMenu();
});
//event listener for scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.style.borderBottom = "1px solid white";
    nav.style.background = "rgba(0,0,0,0.7)";
  } else {
    nav.style.borderBottom = "none";
    nav.style.background = "transparent";
  }
});

window.addEventListener("scroll", ()=>{
  if (window.scrollY > 350 && window.scrollY<900){
    cardContainer.classList.add("active")
  }else{
    cardContainer.classList.remove("active")
  }
})

window.addEventListener("scroll", ()=>{
  if (window.scrollY > 1000 && window.scrollY<1600){
    futureCardContainer.classList.add("activeLeft")
  }else{
    futureCardContainer.classList.remove("activeLeft")
  }
})