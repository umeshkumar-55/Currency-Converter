let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let accessMesg = document.querySelector("#start-playing");
let accUserScore = document.querySelector("#userScoreValue");
let accCompScore = document.querySelector("#computerScoreValue");
let resetScore = document.querySelector("#forResetScore");

let genCompChoice = () => {
  // 0 - rock, 1 - paper, 2 - scissors
  let options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
let drawGame = () => {
  //   console.log("Match Draw");
  accessMesg.innerText = "Match Draw, Play Again";
  accessMesg.style.backgroundColor = "transparent";
  //   accessMesg.style.backgroundColor = "red";
  //   alert("Match Draw, Play Again");
};
let showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    accUserScore.innerText = userScore;
    // console.log("You Win");
    accessMesg.innerText = "You Win this bet";
    accessMesg.style.backgroundColor = "green";
  } else {
    computerScore++;
    accCompScore.innerText = computerScore;
    // console.log("You Lose");
    accessMesg.innerText = "Oops! You Lose";
    accessMesg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  //   console.log("user choice = ", userChoice);
  // Generate Computer's Choice
  let compChoice = genCompChoice();
  //   console.log("computer choice =", compChoice);
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("Id");
    // console.log("image was clicked", userChoice);
    playGame(userChoice);
  });
});

resetScore.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  accUserScore.innerText = userScore;
  accCompScore.innerText = computerScore;
  accessMesg.innerText = "Let's Play";
  accessMesg.style.backgroundColor = "transparent";
})