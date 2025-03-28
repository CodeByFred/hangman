let wordList = [];
let currentWord = "";
let wordsleft = 200;

function readFile() {
  fetch("./assets/example-words.json")
    .then((response) => response.json())
    .then((data) => {
      wordList = data;
      getRandomWord();
      displayUnderscores();
      console.log("Words loaded");
    })
    .catch((error) => console.error("Error loading the file:", error));
}

function getRandomWord() {
  const index = Math.floor(Math.random() * wordsleft);
  console.log(index);
  currentWord = wordList[index];
}

function displayUnderscores() {
  const guessDisplay = document.querySelector("#guesses");
  let wordUnderscores = currentWord
    .split("")
    .map((letter) => "_")
    .join(" ");
  guessDisplay.textContent = wordUnderscores;
}

const inputLetter = document.querySelector("input");
const capture = document.querySelector("#capture");

inputLetter.addEventListener("keyup", (e) => {
  console.log(e.key);
  capture.textContent = `You entered: ${e.key}`;
  inputLetter.value = "";
});

function gameStart() {
  document.querySelector("#start").addEventListener("click", (e) => {
    readFile();
  });
}

gameStart();
