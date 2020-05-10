//CONSTANTS
let duplicate;
const easyWords = ["dog", "cat", "bat", "axe", "hat", "ant", "sat", "rug", "mug", "bet", "art", "can", "day", "box", "egg", "few", "bed", "job", "hot", "men", "use", "sun", "jar", "lip", "flu", "aim", "red", "lid", "ear", "tea", "ski", "oak", "gum", "ham", "mob", "nut", "shy", "van", "elk", "gem", "rap", "fur", "eve", "cry", "mad", "ore", "tax", "six", "pet", "old", "map", "gym", "leg", "bus", "app", "war", "yes", "mud", "rim", "duo"];
const mediumWords = ["house", "beach", "adult", "chief", "funny", "hello", "metal", "sauce", "cocoa", "flags", "upset", "pearl", "trash", "enemy", "pizza", "humor", "eagle", "flame", "cargo", "puppy", "retro", "spark", "bride", "straw", "inbox", "bored", "chalk", "fatal", "hobby", "melee", "bagel", "debug", "amaze", "witch", "stool", "thief", "acorn", "hover", "lever", "merge", "lunar", "debit", "cubic", "erase", "vivid", "waist", "yeast", "syrup", "trunk", "rebel", "lobby", "pasta", "grape", "choir", "jewel", "scoop", "rival", "yacht", "sushi", "bunny"];
const hardWords = ["ability", "battery", "compare", "illness", "weather", "speaker", "package", "organic", "quickly", "regular", "premium", "musical", "journal", "healthy", "economy", "connect", "gallery", "illegal", "parking", "roughly", "success", "accused", "chronic", "unusual", "version", "setting", "message", "removal", "several", "dispute", "tourist", "avocado", "witness", "soldier", "monster", "habitat", "crystal", "younger", "analyze", "nervous", "precise", "trailer", "satisfy", "minimal", "fortune", "genuine", "bizarre", "exhibit", "gesture", "nucleus", "pivotal", "rainbow", "mustard", "lottery", "address", "network", "legally", "cartoon", "horizon", "induced"];

for (var i = 0; i < hardWords.length; i++) {
  for (var j = i+1; j < hardWords.length; j++) {
    if (hardWords[i] == hardWords[j]) {
      duplicate = hardWords[j]
      console.log(duplicate)
    }
  }
}

//VARIABLES

let turboTypingArray = [];
let word
let score = 0;
let attempts = 0;
let correctAttempts = 0;
let answerStreak = 0;
let highestAnswerStreak = 0;
let timeRemaining;
let myTimer;

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
document.getElementById("hard").onclick = setHard;

//FUNCTIONS

function init() {
  score = 0;
  attempts = 0;
  correctAttempts = 0;
  answerStreak = 0;
  highestAnswerStreak = 0;
  timeRemaining = 120;

  clearInterval(myTimer);

  document.getElementById("timer").innerHTML = "2:00";
  myTimer = setInterval(updateTimer, 1000);

  if (document.getElementById("board").classList.contains("game-over-lose")) {
    document.getElementById("board").classList.remove("game-over-lose");
  }

  if (document.getElementById("board").classList.contains("game-over-win")) {
    document.getElementById("board").classList.remove("game-over-win");
  }
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



  document.getElementById("user-input").focus();
  refresh();
}



function setMedium() {

  init();

    turboTypingArray = mediumWords.slice();

    turboTypingArray.forEach((item, i) => {
      document.getElementById("board").innerHTML += "<div class='board-word'>" +item + "</div>"
    });

    document.getElementById("user-input").focus();
    refresh();
}


function setHard() {

  init();

    turboTypingArray = hardWords.slice();

    turboTypingArray.forEach((item, i) => {
      document.getElementById("board").innerHTML += "<div class='board-word'>" +item + "</div>"
    });

    document.getElementById("user-input").focus();
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

  answerStreak = answerStreak + 1;
  if (answerStreak > highestAnswerStreak) {
    highestAnswerStreak = answerStreak
  }
  score = score + 10 + answerStreak;
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
  answerStreak = 0;
  alert("das wrong broke boi")
}


function checkDone() {
  if (turboTypingArray.length < 1) {
    score = score - (attempts - correctAttempts);

    clearInterval(myTimer);
    gameWin();
  }
}


function gameOver() {

  document.getElementById("board").classList.add("game-over-lose");
  document.getElementById("board").innerHTML = "GAME OVER <br> Score: " + score + "<br>Attempts: " + attempts + "<br>Correct Attempts: " + correctAttempts + "<br>Highest Answer Streak: " + highestAnswerStreak + "<br>Words Remaining: " + turboTypingArray.length + "/60";
}


function gameWin() {

  console.log("win");
  document.getElementById("board").classList.add("game-over-win");
  document.getElementById("board").innerHTML = "YOU WIN! <br> Score: " + score + "<br>Attempts: " + attempts + "<br>Correct Attempts: " + correctAttempts + "<br>Highest Answer Streak: " + highestAnswerStreak + "<br>Words Remaining: " + turboTypingArray.length + "/60";
}


function updateTimer() {

  timeRemaining--


if (timeRemaining > 60) {

  timerSeconds = timeRemaining - 60;
  timerDisplay = "1:" + timerSeconds;
}
 if (timeRemaining < 70) {
  timerSeconds = timeRemaining - 60
  timerDisplay = "1:0" + timerSeconds;


}

 if (timeRemaining < 60) {
  timerDisplay = "0:" + timeRemaining;
}

if (timeRemaining < 10) {
  timerDisplay = "0:0" + timeRemaining;
}

  if (timeRemaining < 1) {
    gameOver();
    clearInterval(myTimer);
  }
  document.getElementById("timer").innerHTML = timerDisplay;
}
