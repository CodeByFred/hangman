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
