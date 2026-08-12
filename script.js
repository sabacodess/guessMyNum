"use strict";

const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".scores");
const highscore = document.querySelector(".highscoreNum");
const scores = 20;

let number = document.querySelector(".number");
let num = Math.trunc(Math.random() * 20) + 1;
console.log(num);
// number.textContent = num;

// const guessNum = function () {
//   if (scores > 0) {
//     if (guess > num) {
//       message.textContent = "too high";
//       scores--;
//       score.textContent = scores;
//     }
//   } else if (guess < num) {
//     message.textContent = "too less";
//     scores--;
//     score.textContent = scores;
//   } else {
//     message.textContent = " You're lost the game";
//     document.querySelector("body").style.backgroundColor = "#DA2C43";
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
  } else if (guess !== num) {
    //+++++++++++++++++++++++++++++++++++++ wwen num is wrong
    if (scores > 1) {
      message.textContent = guess > num ? "too high...." : "too low.....";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = " You're lost the game";
      document.querySelector("body").style.backgroundColor = "#DA2C43";
    }
  }
});
// } else if (guess > num) {
// ++++++++++++++++++++++++++++++++++++++++++too high
// guesses();
// if (scores > 0) {
//   message.textContent = "too high";
//   scores--;
//   score.textContent = scores;
// } else {
//   message.textContent = " You're lost the game";
//   document.querySelector("body").style.backgroundColor = "#DA2C43";
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++too low
//   } else if (guess < num) {
//     if (scores > 0) {
//       message.textContent = "too less";
//       scores--;
//       score.textContent = scores;
//     } else {
//       message.textContent = " You're lost the game";
//       document.querySelector("body").style.backgroundColor = "#DA2C43";
//     }
//   }
// });

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
