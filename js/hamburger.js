// получаем айди бургер меню который в хеддере
// получаем айди контента который будет выезжать
const burgerMenu = document.getElementById("header__burgergMenu");
const burgerMenuContent = document.getElementById("burgerMenu__content");
let checkClick = false;
//добавляем слушателя к бургер меню и в зависимости от чекера меняем класс у контента
//добавляем актив для крестика из бургер меню
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
