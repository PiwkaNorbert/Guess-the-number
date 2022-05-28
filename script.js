'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#405252d2';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector(
      '.message'
    ).textContent = `No Number! Please Enter a number between 1 and 20`;
    // When numbers aren't in the spectrum
  } else if (guess > 20 || guess < 0) {
    document.querySelector(
      '.message'
    ).textContent = `Please enter a number between 1 and 20`;
    //When player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = `🎉 Correct number!`;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#3f792d96';
    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
    //When guess is too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Lower!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Higher!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
