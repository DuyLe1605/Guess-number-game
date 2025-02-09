'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (playerScore) {
  document.querySelector('.score').textContent = playerScore;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      displayMessage('No Number ❌');

      //   When player win
    } else if (guess === secretNumber) {
      displayMessage('Correct Number 🎉✨');

      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.transition = '0.25s';

      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //   When guess is wrong
    } else if (guess != secretNumber) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
      score--;
      displayScore(score);
    }

    // When player lose the game
  } else {
    displayMessage('You lose the game ');
    displayScore(0);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  displayScore(20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
