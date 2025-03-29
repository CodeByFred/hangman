export const updateAlphabetDisplay = (letterGuessed, value) => {
  const letter = document.querySelector(`#${letterGuessed}`);
  if (value) {
    letter.style.backgroundColor = "green";
  } else {
    letter.style.backgroundColor = "red";
  }
};
