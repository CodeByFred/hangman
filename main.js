let wordList = [];
let currentWord = "";
let currentWordUnderscoresArr = [];
let wordsleft = 200;
let guessDisplay = document.querySelector("#guesses");

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
  currentWord = wordList[index];
  console.log(currentWord);
}

function displayUnderscores() {
  currentWordUnderscoresArr = currentWord.split("").map(() => "_");
  guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
}

const inputLetter = document.querySelector("input");
const capture = document.querySelector("#capture");

inputLetter.addEventListener("keyup", (e) => {
  console.log(e.key);
  capture.textContent = `You entered: ${e.key}`;
  inputLetter.placeholder = "";
  inputLetter.value = "";
  for (let i = 0; i < currentWord.length; i++) {
    console.log(e.key, currentWord[i]);
    if (e.key.toLowerCase() === currentWord[i]) {
      console.log("comparsion");

      currentWordUnderscoresArr[i] = currentWord[i];
      guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
    }
  }
});

function gameStart() {
  document.querySelector("#start").addEventListener("click", (e) => {
    readFile();
  });
}

gameStart();
