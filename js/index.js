function toggleMobileMenu() {
  mobileMenuIcon.classList.toggle("fa-bars");
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
