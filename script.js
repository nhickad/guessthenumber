"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  function displayMessage(message) {
    document.querySelector(".message").textContent = message;
  }

  if (!guess) {
    displayMessage("👀 No number!");
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    displayMessage("👏 Correct Number!!");
    document.querySelector("h1").textContent = "YOU GUESS THE RIGHT NUMBER!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //displayMessage(guess > secretNumber ? "Too High! 👆 " : "Too Low! 👇 ");
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High! 👆 " : "Too Low! 👇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You LOST the game! 😿");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#040d12";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector("h1").textContent = "Guess My Number!";
});
