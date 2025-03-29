import {
  readFile,
  getRandomWord,
  wordList,
  gameOver,
  currentWord,
} from "./js/functionality.js";

import { playerTurn, displayUnderscores } from "./js/dom.js";

document.querySelectorAll(".game__letter").forEach((cell) => {
  cell.addEventListener("click", () => {
    if (wordList.length === 0 || gameOver) {
    } else {
      console.log(cell.id);
      playerTurn(cell.id, currentWord);
    }
  });
});

document.querySelector("input").addEventListener("keyup", (e) => {
  if (wordList.length === 0 || gameOver) {
  } else playerTurn(e.key, currentWord);
});

document.querySelector("#start").addEventListener("click", async (e) => {
  await readFile();
  getRandomWord(wordList);
  displayUnderscores(currentWord);
});
