"use strict";

let guess = document.querySelector(".guess");
let message = document.querySelector(".message");
let score = document.querySelector(".scores");
let highscore = document.querySelector(".highscoreNum");
let scores = 20;

let number = document.querySelector(".number");
let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
// number.textContent = num;

// const guesses = function () {
//   if (scores > 0) {
//     message.textContent = "too high";
//     scores--;
//     score.textContent = scores;
//   } else {
//     message.textContent = " You're lost the game";
//   }
// };

let check = document.querySelector(".check");
check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);
  //+++++++++++++++++++++++++++++++++++++++ if not a number
  if (!guess) {
    message.textContent = "not a number";
    // +++++++++++++++++++++++++++++++++++++++player win
  } else if (guess === num) {
    message.textContent = "correct answer";
    number.textContent = num;
    highscore.textContent = scores;
    document.querySelector("body").style.backgroundColor = "#7cfc00";
    number.style.width = "300px";
    // ++++++++++++++++++++++++++++++++++++++++++too high
  } else if (guess > num) {
    // guesses();
    if (scores > 0) {
      message.textContent = "too high";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "#DA2C43";
    }
    // +++++++++++++++++++++++++++++++++++++++++++++++++too low
  } else if (guess < num) {
    if (scores > 0) {
      message.textContent = "too less";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "#DA2C43";
    }
  }
});

let again = document.querySelector(".again");
again.addEventListener("click", function () {
  scores = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  console.log(num);

  number.textContent = "?";
  score.textContent = scores;

  message.textContent = "start guessing...";
  guess.value = "";

  document.querySelector("body").style.backgroundColor = "#f6f3ea";
  number.style.width = "150px";
});
