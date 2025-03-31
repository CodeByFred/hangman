export let currentWordUnderscoresArr = [];
export let guesses = 0;
export let gameOver = false;

export function displayUnderscores(currentWord) {
  let guessDisplay = document.querySelector("#guesses");
  currentWordUnderscoresArr = currentWord.split("").map(() => "_");
  guessDisplay.textContent = currentWordUnderscoresArr.join(" ");
}

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

export const playerTurn = (letter, currentWord, value, gameStats) => {
  if (value) return;

  let found = false;
  for (let i = 0; i < currentWord.length; i++) {
    if (letter.toLowerCase() === currentWord[i]) {
      currentWordUnderscoresArr[i] = currentWord[i];
      document.querySelector("#guesses").textContent =
        currentWordUnderscoresArr.join(" ");
      found = true;
    }
  }

  if (currentWordUnderscoresArr.join("") === currentWord) {
    document.querySelector("#win").play();
    document.querySelector("#image").src = `./assets/img/you-win.png`;
    gameOver = true;
    gameStats.gamesWon++;
    updateAlphabetDisplay(letter, found);
    return;
  }
  if (!found) {
    guesses++;
  }

  if (guesses === 10) {
    document.querySelector("#image").src = `./assets/img/you-lose.png`;
    document.querySelector("#lose").play();
    gameOver = true;
    gameStats.gamesLost++;
  } else {
    rotateImage(guesses);
  }
  updateAlphabetDisplay(letter, found);
};
