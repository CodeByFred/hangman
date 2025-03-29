export let lettersGuessed = [];
export let wordList = [];
export let currentWord = "";
let wordsleft = 0;
const previousWordList = [];

export async function readFile() {
  await fetch("./assets/example-words.json")
    .then((response) => response.json())
    .then((data) => {
      wordList = data;
      console.log("Words loaded");
      wordsleft = wordList.length;
      getRandomWord();
    })
    .catch((error) => console.error("Error loading the file:", error));
}

export function getRandomWord() {
  const index = Math.floor(Math.random() * wordsleft);
  currentWord = wordList[index];
  console.log(`Current word: ${currentWord}`);
  removeWordFromList(index);
  return currentWord;
}

export function removeWordFromList(i) {
  wordList.splice(i, 1);
  wordsleft--;
  console.log(wordList.length);
}

export const storeLettersGuessed = (letter) => {
  lettersGuessed.push(letter);
  console.log(lettersGuessed);
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
  previousWordList.push(word);
  const addWord = document.createElement("p");
  const addWordText = document.createTextNode(word);
  addWord.appendChild(addWordText);
  document.querySelector("#previous-words").appendChild(addWord);
}
