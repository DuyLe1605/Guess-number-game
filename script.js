'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number ❌';

      //   When player win
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number 🎉✨';

      document.querySelector('body').style.backgroundColor = ' #60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.transition = '0.25s';

      document.querySelector('.number').textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //   When the guess is too Low
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;

      //   When the guess is too High
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When player lose the game
  } else {
    document.querySelector('.message').textContent = 'You lose the game ';
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
