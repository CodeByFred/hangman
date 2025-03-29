import { storeLettersGuessed } from "./js/functionality.js";

import { updateAlphabetDisplay } from "./js/dom.js";

let wordList = [];
const previousWordList = [];
let currentWord = "";
let currentWordUnderscoresArr = [];
let wordsleft = 200;
let guessDisplay = document.querySelector("#guesses");
let guesses = 0;

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
  console.log(`Current word: ${currentWord}`);
}

function displayUnderscores() {
  currentWordUnderscoresArr = currentWord.split("").map(() => "_");
  guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
}

const inputLetter = document.querySelector("input");
const capture = document.querySelector("#capture");

inputLetter.addEventListener("keyup", (e) => {
  // console.log(e.key);
  const letterEntered = e.key.toUpperCase();
  capture.textContent = `You entered: ${letterEntered}`;
  inputLetter.placeholder = "";
  inputLetter.value = "";
  let found = false;
  for (let i = 0; i < currentWord.length; i++) {
    // console.log(letterEntered, currentWord[i]);
    if (e.key.toLowerCase() === currentWord[i]) {
      currentWordUnderscoresArr[i] = currentWord[i];
      guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
      found = !found;
    }
  }
  storeLettersGuessed(letterEntered);
  if (!found) guesses++;
  console.log(guesses);
  updateAlphabetDisplay(letterEntered, found);
  // rotate image
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

document.querySelectorAll(".game__letter").forEach((cell, letter) => {
  cell.addEventListener("click", (e) => {
    // if condition for game over
    //
    //
    // condition when letter is selected with mouse
    //
    console.log(cell.id);
    document.querySelector(`#${cell.id}`).style.backgroundColor = "green";
  });
});
