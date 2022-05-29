"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let totalScore = 20;
let highScore = 0;

const number = document.querySelector(".number");
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const again = document.querySelector(".again");

const body = document.querySelector("body");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (totalScore) {
  document.querySelector(".score").textContent = totalScore;
};

again.addEventListener("click", function () {
  totalScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  displayScore(totalScore);
  guess.value = "";
  body.classList.remove("win-background");
  number.classList.remove("win-number");
  number.textContent = "?";
  again.classList.add("hidden");
  check.classList.remove("hidden");
});

check.addEventListener("click", function () {
  const guessed = Number(guess.value);
  const highscore = document.querySelector(".highscore");
  if (!guessed) {
    displayMessage("Please Enter a number between 1 and 20");

    // When numbers aren't in the spectrum
  } else if (guessed > 20 || guessed < 1) {
    displayMessage("Please enter a number between 1 and 20");

    //When a player wins
  } else if (guessed === randomNumber) {
    displayMessage("🎉 Correct number!");
    number.textContent = randomNumber;
    body.classList.add("win-background");
    number.classList.add("win-number");
    again.classList.remove("hidden");
    check.classList.add("hidden");
    if (highScore < totalScore) {
      highScore = totalScore;
      highscore.textContent = highScore;
    }
    //When guess is wrong
  } else if (guessed !== randomNumber) {
    if (totalScore > 1) {
      displayMessage(guessed > randomNumber ? `Too high` : `Too low`);
      totalScore--;
      displayScore(totalScore);
    } else {
      displayMessage("You lost!");
      displayScore(0);
    }
  }
});
