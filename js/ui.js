//reference navbar
const nav = document.querySelector("nav");
const mobileMenuIcon = document.querySelector("#mobileMenuIcon .fa-bars");
const mobileMenuContainer = document.getElementById("mobileMenuContainer");
const cardContainer = document.getElementById("cardContainer")
const futureCardContainer = document.getElementById("futureCardContainer")

//reference register form 
const registerForm = document.getElementById("registerForm");
 const registerNameInput = document.getElementById("registerNameInput");
 const registerEmailInput = document.getElementById("registerEmailInput");
 const registerPasswordInput = document.getElementById("registerPasswordInput");
 const registerPasswordConfirmInput = document.getElementById("registerPasswordConfirmInput");
 const registerBtn = document.getElementById("registerBtn")
 const registerInputs = document.querySelectorAll("#registerInputHolder input")

 //reference login form
const logInForm = document.getElementById("logInForm")
const logInNameInput = document.getElementById("logInNameInput")
const logInEmailInput = document.getElementById("logInEmailInput")
const logInPasswordInput = document.getElementById("logInPasswordInput")
const loginBtn = document.getElementById("loginBtn") 

//event listener for mobile menu icon
mobileMenuIcon.addEventListener("click", () => {
  if (mobileMenuIcon.classList.contains("fa-bars")) {
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-xmark");
  } else {
    mobileMenuIcon.classList.remove("fa-xmark");
    mobileMenuIcon.classList.add("fa-bars");
  }
  mobileMenuContainer.style.animation = "slideIn 0.3s forwards";
  if (mobileMenuContainer.style.display === "flex") {
    mobileMenuContainer.style.animation = "slideOut 0.3s forwards";
    setTimeout(() => {
      mobileMenuContainer.style.display = "none";
    }, 300);
  } else {
    mobileMenuContainer.style.display = "flex";
  }
});

//event listener for register page
if(registerForm){
  registerForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("submit")
    if (registerPasswordInput.value !== registerPasswordConfirmInput.value) {
      alert("not the sam password")
      return;
    } else {
      const {userName, userEmail, userPassword} = getUser();
      saveUser(userName, userEmail, userPassword);
      registerForm.reset();
      alert("Register Successful")
      window.location.href = "login.html"
    }
  })
}

//event listener for login page
if(logInForm){
  logInForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    userLogin();
  })
}

//window scroll event
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
    cardContainer.classList.add("show")
    if (y >=0 && y < 950) {
      cardContainer.classList.add("activeLeft");
    } else {
      cardContainer.classList.remove("activeLeft");
    }
  }

  // Tablet
  else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    cardContainer.classList.remove("show")
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