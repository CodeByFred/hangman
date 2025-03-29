let currentWordUnderscoresArr = [];
let guesses = 0;

export const updateAlphabetDisplay = (letterGuessed, value) => {
  const letter = document.querySelector(`#${letterGuessed}`);
  if (value) {
    letter.style.backgroundColor = "green";
  } else {
    letter.style.backgroundColor = "red";
  }
};

export const rotateImage = (guessNumber) => {
  document.querySelector("#image").src = `./assets/img/h-${guessNumber}.jpg`;
};

export function displayUnderscores(currentWord) {
  let guessDisplay = document.querySelector("#guesses");
  currentWordUnderscoresArr = currentWord.split("").map(() => "_");
  guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
}

export const playerTurn = (letter, currentWord) => {
  const letterEntered = letter.toUpperCase();
  document.querySelector(
    "#capture"
  ).textContent = `You entered: ${letterEntered}`;
  document.querySelector("input").placeholder = "";
  document.querySelector("input").value = "";
  let found = false;
  for (let i = 0; i < currentWord.length; i++) {
    // console.log(letterEntered, currentWord[i]);
    if (letter.toLowerCase() === currentWord[i]) {
      currentWordUnderscoresArr[i] = currentWord[i];
      document.querySelector("#guesses").textContent =
        currentWordUnderscoresArr.join(" ");
      found = true;
    }
  }
  //   storeLettersGuessed(letterEntered);
  if (!found) {
    guesses++;
    rotateImage(guesses);
  }
  console.log(guesses);
  updateAlphabetDisplay(letterEntered, found);
};
