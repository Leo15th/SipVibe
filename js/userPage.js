//reference nav
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

let userKey;

//window event for userName
window.addEventListener("DOMContentLoaded", ()=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if(currentUser){
        userNameSpan.textContent = currentUser.userName;
        userKey = `cart_${currentUser.userName}`
        updateCartCount(userKey)
    }

    const activeTab = document.querySelector(".tabBtn.active")
    if(activeTab) {
        const category = activeTab.dataset.category;
        renderMenu(category, userKey)
    }
})

//window scroll event



// atc events
let cartCountNumber = Number(cartCountSpan.innerText) || 0;
if(cartCountNumber === 0){
    cartCountContainer.style.display = "none"
}

//function for update Cart Count
function updateCartCount (userKey){
    let cart = JSON.parse(localStorage.getItem(userKey)) || [];
    let cartCountNumber = cart.length;
    cartCountSpan.innerText = cartCountNumber
    if(cartCountNumber>0){
        cartCountContainer.style.display= "flex"
    } else{
        cartCountContainer.style.display = "none"
    }
}

//function for menu render
function renderMenu(category, userKey){
    const container = document.getElementById(category);
    container.innerHTML = "";
    
    let cart = JSON.parse(localStorage.getItem(userKey)) || [];
    
    //get the image
    const filteredCategory = menuItems.filter(menuItem => menuItem.category === category)

    filteredCategory.forEach(menuItem =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${menuItem.img}" alt="">
            <div class="cardDescriptionHolder">
                <div class="cardDescriptionHeader">
                    <h3>${menuItem.name}</h3>
                    <span>Price: $${menuItem.price}</span>
                </div>
                <button class="atcBtn">Add To Cart</button>
                <div class="quantityControl">
                    <button class="reduceQuantityBtn">-</button>
                    <span class="quantityCount">0</span>
                    <button class="increaseQuantityBtn">+</button>
                </div>
            </div>
        `;
        container.appendChild(card);
        const atcBtn = card.querySelector(".atcBtn")

        const quantityControlContainer = card.querySelector(".quantityControl")
        const reduceQuantityBtn = card.querySelector(".reduceQuantityBtn") 
        const quantityCount = card.querySelector(".quantityCount")
        const increaseQuantityBtn = card.querySelector(".increaseQuantityBtn")
        
        const menuItemName = menuItem.name;
        const menuItemPrice= menuItem.price;
        const menuItemPhoto = menuItem.img
        
        let existingItem = cart.find(item => item.menuItemName === menuItemName);
        let quantityNumber = existingItem ? existingItem.quantityNumber : 0 ;

        if(quantityNumber> 0){
            atcBtn.style.display = "none";
            quantityControlContainer.style.display = "grid";
            quantityCount.innerText = quantityNumber;
        }
        atcBtn.addEventListener("click", ()=> {
            atcBtn.style.display = "none"
            quantityNumber ++;
            quantityCount.innerText = quantityNumber
            quantityControlContainer.style.display = "grid"
            //if have existing item
            let existingItem = cart.find(item => item.menuItemName === menuItemName)
            if(existingItem){
                existingItem.quantityNumber = quantityNumber;
            } else{
                cart.push({
                    menuItemName,
                    menuItemPhoto,
                    menuItemPrice,
                    quantityNumber
                })
            }
            localStorage.setItem(userKey, JSON.stringify(cart));
            updateCartCount(userKey);
        })
        reduceQuantityBtn.addEventListener("click",()=>{
            if(quantityNumber > 0){
                quantityNumber--;
                quantityCount.innerText = quantityNumber;
            }
            if(quantityNumber === 0){
                quantityControlContainer.style.display = "none"
                atcBtn.style.display = "block";
                cart = cart.filter(item => item.menuItemName !== menuItemName)
            } else{
                let existingItem = cart.find(item => item.menuItemName === menuItemName);
                if (existingItem) {
                existingItem.quantityNumber = quantityNumber;
            }
            }
            localStorage.setItem(userKey, JSON.stringify(cart));
            updateCartCount(userKey)
        })

        increaseQuantityBtn.addEventListener("click",()=>{
            quantityNumber++;
            quantityCount.innerText = quantityNumber
            let existingItem = cart.find(item=> item.menuItemName === menuItemName);
            if (existingItem){
                existingItem.quantityNumber = quantityNumber;
            }
            localStorage.setItem(userKey, JSON.stringify(cart))
            updateCartCount(userKey)
        })
    })

}

//function for the tab btns for tabcategory
function opentab(event, tabName){
    console.log("Switching to tab:", tabName);
    tabContents.forEach(tc => {
        tc.classList.remove("active")
    })
    tabBtns.forEach(tab => {
        tab.classList.remove("active")
    })
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active")
    renderMenu(tabName, userKey);
}