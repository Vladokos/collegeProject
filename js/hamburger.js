const burgerMenu = document.getElementById("header__burgergMenu");
const burgerMenuContent = document.getElementById("burgerMenu__content");
let checkClick = false;

burgerMenu.addEventListener("click", () => {
  if (!checkClick) {
    burgerMenuContent.classList.add("active");
    burgerMenu.classList.add("active");
    checkClick = true;
  } else {
    burgerMenuContent.classList.remove("active");
    burgerMenu.classList.remove("active");
    checkClick = false;
  }
});
