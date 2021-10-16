// получаем айди бургер меню который в хеддере
// получаем айди контента который будет выезжать
const burgerMenu = document.getElementById("header__burgergMenu");
const burgerMenuContent = document.getElementById("burgerMenu__content");
const notActive = document.getElementsByClassName("notActiveContent");
let checkClick = false;
//добавляем слушателя к бургер меню и в зависимости от чекера меняем класс у контента
//добавляем актив для крестика из бургер меню
for (let i = 0; i < notActive.length; i++) {
  notActive[i].addEventListener("mouseover", (event) => {
    console.log(event);
    console.log(event.target.offsetWidth);

    let widh = event.target.offsetWidth + "px";
    let stl = window.getComputedStyle(notActive[i], ":after").getPropertyValue("width");;
    console.log(stl);
    stl.setPropertyValu
    
  });
}

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
