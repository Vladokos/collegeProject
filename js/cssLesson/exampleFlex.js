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

let flexDc = document.getElementById("exampleDc__normal-block");
let stateDc = document.getElementById("stateDc");

let flexDcReverse = document.getElementById("exampleDc__reverse-block");
let stateDcReverse = document.getElementById("stateDc__reverse");

flexDc.addEventListener("click", () => {
  if (flexDc.classList.contains("acitve")) {
    flexDc.classList.remove("acitve");
    stateDc.innerHTML = "flex-direction: row;";
  } else {
    flexDc.classList.add("acitve");
    stateDc.innerHTML = "flex-direction: column;";
  }
});

flexDcReverse.addEventListener("click", () => {
  if (flexDcReverse.classList.contains("active")) {
    flexDcReverse.classList.remove("active");
    stateDcReverse.innerHTML = "flex-direction: row-reverse;";
  } else {
    flexDcReverse.classList.add("active");
    stateDcReverse.innerHTML = "flex-direction: column-reverse;";
  }
});

let juc = document.getElementById("examplesJuC-block");
let stateJuc = document.getElementById("stateJuc");

let classAdd = ["fe", "center", "spb", "spa"];
let stateChng = [
  "justify-content: flex-end;",
  "justify-content: center;",
  "justify-content: space-between;",
  "justify-content: space-around;",
];
let counter = 0;

juc.addEventListener("click", () => {
  if (counter === 0) {
    stateJuc.innerHTML = stateChng[counter];
    juc.classList.add(classAdd[counter]);
    counter++;
  } else {
    stateJuc.innerHTML = stateChng[counter];
    juc.classList.add(classAdd[counter]);
    juc.classList.remove(classAdd[counter - 1]);

    if (counter === 4) {
      juc.classList.remove(classAdd[counter]);
      stateJuc.innerHTML = "justify-content: flex-start;";
      counter = 0;
    } else {
      counter++;
    }
  }
});

let algItems = document.getElementById("examplesAlignI-block");
let stateAlgItems = document.getElementById("stateAligItm");

let classAddAlg = ["fe", "center", "stretch", "baseline"];
let stateChngAlg = [
  "align-items: flex-end;",
  "align-items: center;",
  "align-items: stretch;",
  "align-items: baseline;",
];

let counterAlg = 0;

algItems.addEventListener("click", () => {
  if (counterAlg === 0) {
    stateAlgItems.innerHTML = stateChngAlg[counterAlg];
    algItems.classList.add(classAddAlg[counterAlg]);
    counterAlg++;
  } else {
    stateAlgItems.innerHTML = stateChngAlg[counterAlg];
    algItems.classList.add(classAddAlg[counterAlg]);
    algItems.classList.remove(classAddAlg[counterAlg - 1]);

    if (counterAlg === 4) {
      algItems.classList.remove(classAddAlg[counterAlg]);
      stateAlgItems.innerHTML = "align-items: flex-start;";
      counterAlg = 0;
    } else {
      counterAlg++;
    }
  }
});
