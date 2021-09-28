let block = document.getElementById("block");
block.addEventListener("click", () => {
  if (block.classList.contains("right")) {
    block.classList.remove("right");
  } else {
    block.classList.add("right");
  }
});
