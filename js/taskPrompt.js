
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
