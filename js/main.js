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

//айди кнопки для появления текста-подсказки
//айди текста=подзказки
const taskPrompt = document.getElementById("task__prompt");
const prompt = document.getElementById("prompt");
let checkOpen = false;
taskPrompt.addEventListener("click", () => {
  if (!checkOpen) {
    prompt.classList.add("active");
    checkOpen = true;
  } else {
    prompt.classList.remove("active");
    checkOpen = false;
  }
});
