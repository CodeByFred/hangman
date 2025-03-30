export let currentWordUnderscoresArr = [];
export let guesses = 0;
export let gameOver = false;

export function displayUnderscores(currentWord) {
  let guessDisplay = document.querySelector("#guesses");
  currentWordUnderscoresArr = currentWord.split("").map(() => "_");
  guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
}

export const playerTurn = (letter, currentWord, value, gameStats) => {
  if (value) return;
  document.querySelector("input").placeholder = "";
  document.querySelector("input").value = "";
  let found = false;
  for (let i = 0; i < currentWord.length; i++) {
    if (letter.toLowerCase() === currentWord[i]) {
      currentWordUnderscoresArr[i] = currentWord[i];
      document.querySelector("#guesses").textContent =
        currentWordUnderscoresArr.join(" ");
      found = true;
    }
  }
  console.log(currentWordUnderscoresArr.join(""), currentWord);

  if (currentWordUnderscoresArr.join("") === currentWord) {
    console.log("game over");
    gameOver = true;
    gameStats.gamesWon++;
    updateAlphabetDisplay(letter, found);
    return;
  }
  if (!found) {
    guesses++;
  }

  if (guesses === 10) {
    document.querySelector("#audio").play();
    console.log(guesses);
    rotateImage(guesses);
    gameOver = true;
    gameStats.gamesLost++;
  } else {
    rotateImage(guesses);
  }
  updateAlphabetDisplay(letter, found);
};

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

export function clearAlphabet(alphabet) {
  console.log(alphabet);
  for (let letter of alphabet) {
    document.querySelector(`#${letter}`).style.backgroundColor = "white";
  }
}

export function resetGame(word) {
  displayUnderscores(word);
  gameOver = false;
  guesses = 0;
  rotateImage(guesses);
}

export const displayGameStats = (stats) => {
  document.querySelector(
    "#game-number"
  ).textContent = `Game #${stats.gameNumber}`;
  document.querySelector("#won").textContent = `Games Won: ${stats.gamesWon}`;

  document.querySelector("#lost").textContent = `Games Lost ${stats.gamesLost}`;
};
