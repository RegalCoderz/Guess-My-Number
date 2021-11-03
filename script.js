"use strict";

/////////////////////////
/*
    * Document Object Model - DOM

        DOCUMENT OBJECT MODEL: STRUCTURED REPRESENTATION OF HTML DOCUMENTS. 
        ALLOWS JAVASCRIPT TO ACCESS HTML ELEMENTS AND STYLES TO MANIPULATE THEM.
        -> Change text, HTML attributes and even css styles.
        ==> Automatically created by the browser when the HTML page loads.
        ===> In the tree structure, Document is the entry point.

    - <html> is the root element in the html documents.
    - DOM Methods and Properties for DOM Manipulation <<=❌=>> JS (DOM !== JS)
    - DOM Methods and Properties are part of WEB APIs
    - Web APIs are like libraries that browsers implement and that we can access from our JS code
    - Web APIs (Application Programming Interface) can interact with <<=✔=>> JS
*/

// let secNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highScore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   let guess = Number(document.querySelector(".guess").value);

//   if (!guess || guess > 20) {
//     document.querySelector(".message").textContent = "❌ Wrong Number";
//   } else if (score > 1) {
//     if (guess === secNumber) {
//       document.querySelector(".message").textContent = "🎉 Correct Number";
//       document.querySelector(".number").textContent = secNumber;
//       document.querySelector("body").style.backgroundColor = "#60b347";
//       document.querySelector(".number").style.width = "30rem";
//       if (score > highScore) {
//         highScore = score;
//         document.querySelector(".highscore").textContent = highScore;
//       }
//     } else {
//       guess > secNumber
//         ? (document.querySelector(".message").textContent = "🐪 Too High!")
//         : (document.querySelector(".message").textContent = "🐊 Too Low!");
//       score--;
//       document.querySelector(".score").textContent = score;
//     }
//   } else {
//     document.querySelector(".message").textContent = "🐪 Game Lost!";
//     document.querySelector(".score").textContent = 0;
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".number").style.width = "15rem";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".guess").value = "";
// });

////////////////////////////////////////////////////////////////////
// * Refactoring Our Code | The Dry Principle (Dont Repeat Yourself)

let ranNumber = function () {
  return Math.floor(Math.random() * 10) + 1;
};
let secNumber = ranNumber();

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess || guess > 20) {
    displayMessage("❌ Wrong Number");
  } else if (score > 1) {
    if (guess === secNumber) {
      displayMessage("🎉 Correct Number");
      document.querySelector(".number").textContent = secNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      displayMessage(guess > secNumber ? "🐪 Too High!" : "🐊 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("🐪 Game Lost!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNumber = ranNumber();
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
