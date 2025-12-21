function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId){
const   element = document.getElementById(elementId);
element.classList.add('bg-orange-400');
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  // console.log(alphabet);

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  // console.log(index,alphabet);
  return alphabet;
}

function continueGame() {
  const Alphabet = getARandomAlphabet();
  console.log(Alphabet);
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = Alphabet;
setBackgroundColorById(Alphabet);
}

function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  continueGame();
}
