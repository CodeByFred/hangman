// Arrays - Iterators - DOM manipulation - Event Listeners - String manipulation

const wordList = [];

function readFile() {
  const reader = new FileReader();
  const rawData = reader.readAsText("./assets/example-words.json", "utf-8");
  wordList = JSON.parse(rawData);
}

function getRandomWord() {
  const index = Math.floor(Math.random() * 200);
  const selectedWord = wordList[index];
  console.log(selectedWord);
  return selectedWord;
}

const inputLetter = document.querySelector("input");
const capture = document.querySelector("#capture");

inputLetter.addEventListener("keyup", (e) => {
  console.log(e.key);
  capture.textContent = `You entered: ${e.key}`;
  inputLetter.value = "";
});
