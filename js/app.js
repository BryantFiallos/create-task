//CONSTANTS

const easyWords = ["dog", "cat", "bat", "axe", "hat", "ant", "sat", "rug", "mug", "bet"];
const mediumWords = ["house", "beach", "adult", "chief", "funny", "hello", "metal", "sauce", "cocoa", "flags", "upset", "pearl", "trash", "enemy", "pizza", "humor", "eagle", "flame", "cargo", "puppy", "retro", "spark", "bride", "straw", "inbox", "bored", "chalk", "fatal", "hobby", "melee", "bagel", "debug", "amaze", "witch", "stool", "thief", "acorn", "hover", "lever", "merge", "lunar", "debit", "cubic", "erase", "vivid", "waist", "yeast", "syrup", "trunk", "rebel", "lobby", "pasta", "grape", "choir", "jewel", "scoop", "rival", "yacht", "sushi", "bunny"]

//VARIABLES

let turboTypingArray = [];
let word
let score = 0;
let attempts = 0;
let correctAttempts = 0;
let answerStreak = 0;

//EVENT LISTENERS

var input = document.getElementById("user-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("input-word").click();
 };
});

document.getElementById("easy").onclick = setEasy;
document.getElementById("medium").onclick = setMedium;

//FUNCTIONS

function init() {
  score = 0;
  attempts = 0;
  correctAttempts = 0;
  answerStreak = 0;
}

function refresh() {

  var newWordBoard = "";

  turboTypingArray.forEach((item, i) => {
    newWordBoard += "<div class='board-word'>" +item + "</div>"
  });

  document.getElementById("board").innerHTML = newWordBoard;
}


function setEasy() {

init();

  turboTypingArray = easyWords.slice();

  turboTypingArray.forEach((item, i) => {
    document.getElementById("board").innerHTML += "<div class='board-word'>" +item + "</div>"
  });
  console.log(turboTypingArray);
  refresh();
}



function setMedium() {

  init();

    turboTypingArray = mediumWords.slice();

    turboTypingArray.forEach((item, i) => {
      document.getElementById("board").innerHTML += "<div class='board-word'>" +item + "</div>"
    });
    console.log(turboTypingArray);
    refresh();
}



function CheckInput() {
  word = document.getElementById("user-input").value;

  if (turboTypingArray.includes(word)) {
   correctWord()

 }
 else {
   wrongWord();
 }

 document.getElementById("user-input").value = "";

refresh();
}



function correctWord() {
  score = score + 10;
  attempts = attempts + 1;
  correctAttempts = correctAttempts + 1;
  answerStreak = answerStreak + 1;

  for (var i = 0; i < turboTypingArray.length; i++) {
    if(turboTypingArray[i] == word) {
      turboTypingArray.splice(i, 1);
    }
  }

  checkDone();
}


function wrongWord() {
  attempts = attempts + 1;
  answerStreak = 0;
  alert("das wrong broke boi")
}


function checkDone() {
  if (turboTypingArray.length < 1) {
    alert("Score: " + score +  "\nAttempts: " + attempts + "\nCorrect Attempts: " + correctAttempts)
  }
}
