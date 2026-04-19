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

//for card container
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // Mobile
  if (window.matchMedia("(max-width: 480px)").matches) {
    if (y >=0 && y < 950) {
      cardContainer.classList.add("activeLeft");
    } else {
      cardContainer.classList.remove("activeLeft");
    }
  }

  // Tablet
  else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    if (y > 250 && y < 1470) {
      cardContainer.classList.add("activeLeft");
    } else {
      cardContainer.classList.remove("activeLeft");
    }
  }

  // Desktop
  else if (window.matchMedia("(min-width: 1025px)").matches) {
    if (y > 300 && y < 1100) {
      cardContainer.classList.add("activeLeft");
    } else {
      cardContainer.classList.remove("activeLeft");
    }
  }
});


//for futurecardContainer
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  // Mobile
  if (window.matchMedia("(max-width: 480px)").matches) {
    if (y > 770 && y < 1450) {
      futureCardContainer.classList.add("activeRight");
    } else {
      futureCardContainer.classList.remove("activeRight");
    }
  }

  // Tablet
  else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    if (y > 1500 && y < 2450) {
      futureCardContainer.classList.add("activeRight");
    } else {
      futureCardContainer.classList.remove("activeRight");
    }
  }

  // Desktop
  else if (window.matchMedia("(min-width: 1025px)").matches) {
    if (y > 1100 && y < 1600) {
      futureCardContainer.classList.add("activeRight");
    } else {
      futureCardContainer.classList.remove("activeRight");
    }
  }
});