export let lettersGuessed = [];
export let wordList = [];
export let currentWord = "";
export let gameStats = {
  gameNumber: 1,
  gamesWon: 0,
  gamesLost: 0,
};
let wordsleft = 0;
const previousWordList = [];

export async function readFile() {
  await fetch("./assets/example-words.json")
    .then((response) => response.json())
    .then((data) => {
      wordList = data;
      wordsleft = wordList.length;
      getRandomWord();
    })
    .catch((error) => console.error("Error loading the file:", error));
}

export function getRandomWord() {
  const index = Math.floor(Math.random() * wordsleft);
  currentWord = wordList[index];
  removeWordFromList(index);
  return currentWord;
}

export function removeWordFromList(i) {
  wordList.splice(i, 1);
  wordsleft--;
}

export const storeLettersGuessed = (letter) => {
  lettersGuessed.push(letter);
};

export const hasLetterBeenPlayed = (ch, arr) => {
  if (arr.includes(ch)) {
    return true;
  } else {
    storeLettersGuessed(ch);
    return false;
  }
};

export function addToPreviousWordList(word) {
  if (!previousWordList.includes(word)) {
    previousWordList.push(word);
    const addWord = document.createElement("p");
    addWord.textContent = word;
    document.querySelector("#previous-words-box").appendChild(addWord);
  }
}
