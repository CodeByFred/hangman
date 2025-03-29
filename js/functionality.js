export let lettersGuessed = [];
export let wordList = [];
let wordsleft = wordList.length;
const previousWordList = [];
export let currentWord = "";
export let gameOver = false;

export const storeLettersGuessed = (letter) => {
  lettersGuessed.push(letter);
  console.log(lettersGuessed);
};

export async function readFile() {
  await fetch("./assets/example-words.json")
    .then((response) => response.json())
    .then((data) => {
      wordList = data;
      console.log("Words loaded");
    })
    .catch((error) => console.error("Error loading the file:", error));
}

export function getRandomWord(list) {
  const index = Math.floor(Math.random() * wordsleft);
  currentWord = list[index];
  previousWordList.push(currentWord);
  console.log(`Current word: ${currentWord}`);
}

function resetGame() {
  document.querySelector("#next-game").addEventListener("click", (e) => {
    getRandomWord();
    displayUnderscores();
    console.log("done");
    const addWord = document.createElement("p");
    const addWordText = document.createTextNode(currentWord);
    addWord.appendChild(addWordText);
    document.querySelector("#previous-words").appendChild(addWord);
  });
}
