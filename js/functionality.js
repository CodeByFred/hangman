export let lettersGuessed = [];

export const storeLettersGuessed = (letter) => {
  lettersGuessed.push(letter);
  console.log(lettersGuessed);
};
