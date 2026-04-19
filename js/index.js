function toggleMobileMenu() {
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
}