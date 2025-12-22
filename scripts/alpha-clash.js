function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log(playerPressed);
  if (playerPressed === "Escape") {
    gameover();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const CurrentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = CurrentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    console.log("This gift is for you");
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // using function

    //update score
    // 1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // //2.increase the score by 1
    // const newscore = currentScore + 1;
    // //3.show the updated score
    // currentScoreElement.innerText = newscore;
    //start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you lost a life");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameover();
    }

    //   const currentLifeElement = document.getElementById('current-life');
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);
    //   const newLife = currentLife - 1;
    //   currentLifeElement.innerText = newLife;
    // }
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

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

function gameover() {
  hideElementById("play-ground");
  showElementById("final-score");
  const lastscore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastscore);
}

function playAgain() {
  hideElementById("final-score");
  showElementById("play-ground");
  setTextElementValueById("current-score", 0);
  setTextElementValueById("current-life", 5);
}
