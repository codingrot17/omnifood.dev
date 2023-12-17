const menuOpen = document.querySelector(".open");
const menuClose = document.querySelector(".close");
const menuBar = document.querySelector(".menu_bar");

const toggleMenu = () => {
  menuClose.style.display = menuClose.style.display === "none" ? "inline" : "inline";
  menuOpen.style.display = menuOpen.style.display === "none" ? "inline" : "none";
  menuBar.classList.toggle('active');
};

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
