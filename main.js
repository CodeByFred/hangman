import {
  readFile,
  getRandomWord,
  wordList,
  currentWord,
  lettersGuessed,
  hasLetterBeenPlayed,
  addToPreviousWordList,
  gameStats,
} from "./js/functionality.js";

import {
  playerTurn,
  displayUnderscores,
  resetGame,
  gameOver,
  clearAlphabet,
  displayGameStats,
} from "./js/dom.js";

document.querySelector("#start").addEventListener("click", async (e) => {
  await readFile();
  displayUnderscores(currentWord);
  displayGameStats(gameStats);
  document.querySelector("#start").style.display = "none";
});

document.querySelector("#next-game").addEventListener("click", () => {
  if (gameOver) {
    clearAlphabet(lettersGuessed);
    lettersGuessed.length = 0;
    gameStats.gameNumber++;
    displayGameStats(gameStats);
    addToPreviousWordList(currentWord);
    resetGame(getRandomWord());
  }
});

document.querySelectorAll(".game__letter").forEach((cell) => {
  cell.addEventListener("click", () => {
    const keyPressed = cell.id;
    let playedBefore = hasLetterBeenPlayed(keyPressed, lettersGuessed);

    playerTurn(keyPressed, currentWord, playedBefore, gameStats);

    if (wordList.length === 0 || gameOver) {
      document.querySelector("#next-game").style.display = "block";
      addToPreviousWordList(currentWord);
      displayGameStats(gameStats);
    }
  });
});

document.querySelector("input").addEventListener("keyup", (e) => {
  if (!gameOver) {
    const keyPressed = e.key.toUpperCase();
    let playedBefore = hasLetterBeenPlayed(keyPressed, lettersGuessed);

    playerTurn(keyPressed, currentWord, playedBefore, gameStats);

    if (wordList.length === 0 || gameOver) {
      document.querySelector("#next-game").style.display = "block";
      addToPreviousWordList(currentWord);
      displayGameStats(gameStats);
      console.log(gameStats);
    }
  }
});
