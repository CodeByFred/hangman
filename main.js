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
  document.querySelector("#input").focus();
});

document.querySelector("#next-game").addEventListener("click", () => {
  if (gameOver) {
    clearAlphabet(lettersGuessed);
    lettersGuessed.length = 0;
    gameStats.gameNumber++;
    displayGameStats(gameStats);
    addToPreviousWordList(currentWord);
    resetGame(getRandomWord());
    document.querySelector("#input").focus();
  }
});

document.querySelectorAll(".game__letter").forEach((cell) => {
  const keyPressed = cell.id;
  cell.addEventListener("click", () => {
    if (!gameOver && wordList.length !== 0) {
      let playedBefore = hasLetterBeenPlayed(keyPressed, lettersGuessed);

      playerTurn(keyPressed, currentWord, playedBefore, gameStats);
    }
    if (gameOver) {
      document.querySelector("#next-game").style.display = "block";
      displayGameStats(gameStats);
    }
  });
});

document.querySelector("input").addEventListener("keyup", (e) => {
  if (e.key < 65 || e.key > 90) return;
  if (!gameOver && wordList.length !== 0) {
    const keyPressed = e.key.toUpperCase();
    let playedBefore = hasLetterBeenPlayed(keyPressed, lettersGuessed);

    playerTurn(keyPressed, currentWord, playedBefore, gameStats);
  }
  if (gameOver && wordList.length !== 0) {
    document.querySelector("#next-game").style.display = "block";
    displayGameStats(gameStats);
  }
  document.querySelector("input").placeholder = "";
  document.querySelector("input").value = "";
});
