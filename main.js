import {
  readFile,
  getRandomWord,
  wordList,
  currentWord,
  lettersGuessed,
  hasLetterBeenPlayed,
  addToPreviousWordList,
} from "./js/functionality.js";

import {
  playerTurn,
  displayUnderscores,
  resetGame,
  gameOver,
  clearAlphabet,
} from "./js/dom.js";

document.querySelector("#start").addEventListener("click", async () => {
  await readFile();
  displayUnderscores(currentWord);
});

document.querySelector("#next-game").addEventListener("click", () => {
  clearAlphabet(lettersGuessed);
  lettersGuessed.length = 0;
  addToPreviousWordList(currentWord);
  resetGame(getRandomWord());
});

document.querySelectorAll(".game__letter").forEach((cell) => {
  cell.addEventListener("click", () => {
    if (wordList.length === 0 || gameOver) {
      addToPreviousWordList(currentWord);
    } else {
      let playedBefore = hasLetterBeenPlayed(cell.id, lettersGuessed);
      playerTurn(cell.id, currentWord, playedBefore);
    }
  });
});

document.querySelector("input").addEventListener("keyup", (e) => {
  const keyPressed = e.key.toUpperCase();
  if (wordList.length === 0 || gameOver) {
    addToPreviousWordList(currentWord);
  } else {
    let playedBefore = hasLetterBeenPlayed(keyPressed, lettersGuessed);
    playerTurn(keyPressed, currentWord, playedBefore);
  }
});
