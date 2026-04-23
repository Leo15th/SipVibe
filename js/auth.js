//save user function for save name, email,password in the local storage
function saveUser(userName, userEmail, userPassword){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({userName, userEmail, userPassword})
    localStorage.setItem("users", JSON.stringify(users));
}
//get user fucntion to get user name,email, password from the register form
function getUser(){
    const userName = registerNameInput.value.trim();
    const userEmail  = registerEmailInput.value.trim();
    const userPassword = registerPasswordInput.value.trim();
    console.log(userName)
    console.log(userEmail)
    console.log(userPassword)
    return{userName,userEmail, userPassword}
}

//check user function for checkuser from the localstorage and check the user jand compare with login input
function checkUser(userName, userEmail, userPassword){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(u=>
        u.userName === userName && u.userEmail === userEmail && u.userPassword === userPassword
    );
}


function userLogin(){
    const userName = logInNameInput.value.trim();
    const userEmail = logInEmailInput.value.trim();
    const userPassword = logInPasswordInput.value.trim();
    if(checkUser(userName, userEmail, userPassword)){
        alert("login successful")
        //set the current user to the local storage
        localStorage.setItem("currentUser", JSON.stringify({userName, userEmail}));
        window.location.href = "users.html"
    } else{
        alert("Invalid credentials.");
    }
}