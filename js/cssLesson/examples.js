let square = document.getElementById("square__button");
let checkPress = false;

square.addEventListener("click", () => {
  if (!checkPress) {
    square.classList.add("active");
    checkPress = true;
  } else {
    square.classList.remove("active");
    checkPress = false;
  }
});

let identSquare = document.getElementById("ident__examples");
let paddingBtn = document.getElementById("padding__button");
let marginBtn = document.getElementById("margin__button");

paddingBtn.addEventListener("click", () => {
  if (identSquare.classList.contains("padding")) {
    identSquare.classList.remove("padding");
  } else {
    identSquare.classList.remove("margin");
    identSquare.classList.add("padding");
  }
});
marginBtn.addEventListener("click", () => {
  if (identSquare.classList.contains("margin")) {
    identSquare.classList.remove("margin");
  } else {
    identSquare.classList.remove("padding");
    identSquare.classList.add("margin");
  }
});
