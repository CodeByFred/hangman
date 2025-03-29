let wordList = [];
const previousWordList = [];
let currentWord = "";
let currentWordUnderscoresArr = [];
let wordsleft = 200;
let guessDisplay = document.querySelector("#guesses");

async function readFile() {
  await fetch("./assets/example-words.json")
    .then((response) => response.json())
    .then((data) => {
      wordList = data;
      console.log("Words loaded");
      getRandomWord();
      displayUnderscores();
    })
    .catch((error) => console.error("Error loading the file:", error));
}

function getRandomWord() {
  const index = Math.floor(Math.random() * wordsleft);
  currentWord = wordList[index];
  previousWordList.push(currentWord);
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

function resetGame() {
  document.querySelector("#reset").addEventListener("click", (e) => {
    getRandomWord();
    displayUnderscores();
    console.log("done");
    const addWord = document.createElement("p");
    const addWordText = document.createTextNode(currentWord);
    addWord.appendChild(addWordText);
    document.querySelector("#previous-words").appendChild(addWord);
  });
}

gameStart();

resetGame();
