import { readFileSync } from "fs";

// Arrays - Iterators - DOM manipulation - Event Listeners - String manipulation

const wordList = [];

function readFile() {
  const rawData = readFileSync("./assets/example-words.json");
  wordList = JSON.parse(rawData);
}

function getRandomWord() {
  const index = Math.floor(Math.random() * 200);
  const selectedWord = wordList[index];
  console.log(selectedWord);
  return selectedWord;
}
