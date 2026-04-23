//reference nav
const nav = document.querySelector("nav")
const userNameSpan = document.getElementById("userNameSpan")

//reference cart
const cartIcon = document.querySelector("#cartContainer .fa-cart-shopping")

const cartCountContainer = document.getElementById("cartCountContainer")

const cartCountSpan = document.getElementById("cartCount");

//reference test btn
const atcBtn = document.getElementById("atcBtn")
const rfcBtn = document.getElementById("rfcBtn")

//reference tab category
const tabBtns = document.querySelectorAll("#categoryBtnsContainer .tabBtn")
const tabContents = document.querySelectorAll("#tabContentHolder .tabContent")


//window event for userName
window.addEventListener("DOMContentLoaded", ()=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if(currentUser){
        userNameSpan.textContent = currentUser.userName
    }
})

//atc events
let cartCountNumber = Number(cartCountSpan.innerText);

atcBtn.addEventListener("click", ()=>{
    cartCountNumber ++;
    cartCountSpan.innerText = Number(cartCountNumber);
    if (cartCountNumber >0){
        cartCountContainer.style.display = "flex"
    }
    console.log(cartCountNumber)
    console.log(typeof(cartCountNumber))
})
rfcBtn.addEventListener("click",()=>{
    if(cartCountNumber>0){
        cartCountNumber--;
    }
    if(cartCountNumber === 0){
        cartCountContainer.style.display = "none";
    }else {
        cartCountSpan.innerText = cartCountNumber;
    }
    console.log(cartCountNumber)
})

//window scroll event
//event listener for scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.style.borderBottom = "1px solid rgba(255,255,255, 0.5)";
    nav.style.background = "rgba(166, 166, 166, 0.6)";
  } else {
    nav.style.borderBottom = "3px solid rgba(170,170,170, 0.5)";
    nav.style.background = "red"
  }
});

//function for the tab btns for tabcategory
function opentab(event, tabName){
    tabContents.forEach(tc => {
        tc.classList.remove("active")
    })
    tabBtns.forEach(tab => {
        tab.classList.remove("active")
    })
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active")
}