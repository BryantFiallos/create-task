var input = document.getElementById("user-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("input-word").click();
 };
});

let turboTypingArray = [];
const easyWords = ["dog", "cat", "bat", "axe", "hat", "ant", "sat", "rug", "mug", "bet"];
let word


let score = 0;
let attempts = 0;
let correctAttempts = 0;


document.getElementById("easy").onclick = setEasy;


function init() {
  score = 0;
  attempts = 0;
  correctAttempts = 0;
}

function refresh() {

  var newWordBoard = "";

  turboTypingArray.forEach((item, i) => {
    newWordBoard += "<div class='board-word'>" +item + "</div>"
  });

  document.getElementById("board").innerHTML = newWordBoard;
}


function setEasy() {

  turboTypingArray = easyWords.slice();

  turboTypingArray.forEach((item, i) => {
    document.getElementById("board").innerHTML += "<div class='board-word'>" +item + "</div>"
  });
  console.log(turboTypingArray);
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

  for (var i = 0; i < turboTypingArray.length; i++) {
    if(turboTypingArray[i] == word) {
      turboTypingArray.splice(i, 1);
    }
  }

  checkDone();
}


function wrongWord() {
  attempts = attempts + 1;
  alert("das wrong broke boi")
}


function checkDone() {
  if (turboTypingArray.length < 1) {
    alert("Score: " + score +  "\nAttempts: " + attempts + "\nCorrect Attempts: " + correctAttempts)
  }
}
