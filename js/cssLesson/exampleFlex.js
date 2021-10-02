let block = document.getElementById("exampleDf-block");
let state = document.getElementById("stateDf");

block.addEventListener("click", () => {
  if (block.classList.contains("df")) {
    block.classList.remove("df");
    state.innerHTML = "display:block;";
  } else {
    block.classList.add("df");
    state.innerHTML = "display:flex;";
  }
});
