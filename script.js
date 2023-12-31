// buttons part of rule and next

const showImage = document.getElementById("showImage");
const ruleBook = document.getElementById("ruleBook");
const closeBtn = document.getElementById("closeBtn");

//

//

showImage.addEventListener("click", () => {
  ruleBook.style.display = "block";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  ruleBook.style.display = "none";
  closeBtn.style.display = "none";
});

//  choices for the game
const choices = ["rock", "paper", "scissor"];

// Generating a random choice for the computer player
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}
// images click event
let rock = document.getElementById("fist");
let paper = document.getElementById("hand");
let scissor = document.getElementById("scissor");
let pc;
// scores functions
// ..........................
let userScore = 0;
function changeUserScore(uscore) {
  document.getElementById("usScore").innerHTML = uscore;
}
let pcScore = 0;
function changePcScore(pscore) {
  document.getElementById("cmScore").innerHTML = pscore;
}
// Save user and computer scores to local storage
function saveScoresToLocalStorage() {
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("pcScore", pcScore);
}
// ...............................

// Getting ID's

let userrock = document.getElementById("fistwinuser");
let userpaper = document.getElementById("handwinuser");
let userscissor = document.getElementById("scissorwinuser");

let pcrock = document.getElementById("fistwinpc");
let pcpaper = document.getElementById("handwinpc");
let pcscissor = document.getElementById("scissorwinpc");

const footer = document.getElementById("foot");
const left = document.getElementById("leftd");
const right = document.getElementById("rightd");
const text3 = document.getElementById("winlosetext");

const nextbutton = document.getElementById("nextBtn");

// Very Important ID'd
const cont1 = document.getElementById("cont1");
// main

const cont2 = document.getElementById("cont2");
// hurray//

let playbutton = document.getElementById("playBtn");
// play again
playbutton.addEventListener("click", function () {
  playbutton.classList.add("hidden");
  nextbutton.classList.add("hidden");
  text3.classList.add("hidden");
  footer.classList.remove("hidden");
  left.classList.add("hidden");
  right.classList.add("hidden");
  cont1.classList.remove("hidden");
  cont2.classList.add("hidden");
  userrock.classList.add("hidden");

  userpaper.classList.add("hidden");

  userscissor.classList.add("hidden");

  pcrock.classList.add("hidden");

  pcpaper.classList.add("hidden");

  pcscissor.classList.add("hidden");
});
function afterclick() {
  text3.classList.remove("hidden");
  playbutton.classList.remove("hidden");
  footer.classList.add("hidden");
  left.classList.remove("hidden");
  right.classList.remove("hidden");
}
function win() {
  document.getElementById("text1").innerHTML = "YOU WIN";
  document.getElementById("text2").innerHTML = "AGAINST PC";
  playbutton.classList.remove("hidden");
  nextbutton.classList.remove("hidden");
}
function lose() {
  document.getElementById("text1").innerHTML = "YOU LOSE";
  document.getElementById("text2").innerHTML = "AGAINST PC";
  playbutton.classList.remove("hidden");
}
function tie() {
  document.getElementById("text1").innerHTML = "TIE UP";
  document.getElementById("text2").innerHTML = "";
  playbutton.classList.remove("hidden");
}
nextbutton.addEventListener("click", function () {
  nextBtn.classList.add("hidden");
  cont1.classList.add("hidden");
  cont2.classList.remove("hidden");
  text3.classList.add("hidden");
  footer.classList.add("hidden");
  left.classList.add("hidden");
  right.classList.add("hidden");
});

rock.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userrock.classList.remove("hidden");
  if (pc === "rock") {
    pcrock.classList.remove("hidden");
    tie();
  } else if (pc === "paper") {
    pcpaper.classList.remove("hidden");
    lose();
    pcScore++;
    changePcScore(pcScore);
  } else {
    pcscissor.classList.remove("hidden");
    win();
    userScore++;
    changeUserScore(userScore);
  }
});

paper.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userpaper.classList.remove("hidden");
  if (pc === "paper") {
    pcpaper.classList.remove("hidden");
    tie();
  } else if (pc === "scissor") {
    pcscissor.classList.remove("hidden");
    lose();
    pcScore++;
    changePcScore(pcScore);
  } else {
    win();
    pcrock.classList.remove("hidden");

    userScore++;
    changeUserScore(userScore);
  }
});
scissor.addEventListener("click", function () {
  pc = computerPlay();
  afterclick();
  userscissor.classList.remove("hidden");
  if (pc === "scissors") {
    pcscissor.classList.remove("hidden");
    tie();
  } else if (pc === "rock") {
    lose();
    pcScore++;
    changePcScore(pcScore);
    pcrock.classList.remove("hidden");
  } else {
    win();
    userScore++;
    changeUserScore(userScore);
    pcpaper.classList.remove("hidden");
  }
});

// Load scores from local storage when the page loads
function loadScoresFromLocalStorage() {
  const savedUserScore = localStorage.getItem("userScore");
  const savedComputerScore = localStorage.getItem("computerScore");
  if (savedUserScore !== null && savedComputerScore !== null) {
    userScore = parseInt(savedUserScore);
    pcScore = parseInt(savedComputerScore);
    userScoreElement.textContent = userScore;
    pcScoreElement.textContent = pcScore;
  }
}

// Load scores when the page loads
loadScoresFromLocalStorage();

// Add a window unload event listener to save scores to local storage
window.addEventListener("beforeunload", saveScoresToLocalStorage);

// ....................................................
