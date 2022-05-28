'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number! Please Enter a number between 1 and 20');

    // When numbers aren't in the spectrum
  } else if (guess > 20 || guess < 0) {
    displayMessage('Please enter a number between 1 and 20');

    //When player wins
  } else if (guess === number) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#3f792d96';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? `Too high` : `Too low`);
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#405252d2';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
