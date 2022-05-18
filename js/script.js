function playGame(playerInput) {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  /* let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );*/

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  if (
    (computerMove == "kamień" && playerMove == "papier") ||
    (computerMove == "papier" && playerMove == "nożyce") ||
    (computerMove == "nożyce" && playerMove == "kamień")
  ) {
    printMessage("Ty wygrywasz!");
  } else if (computerMove == playerMove) {
    printMessage("remis");
  } else if (playerMove == "nieznany ruch") {
    printMessage("nieprawidołowy ruch");
  } else {
    printMessage("wygrał komputer");
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == "kamień" && argPlayerMove == "papier") ||
      (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
      (cargComputerMove == "nożyce" && argPlayerMove == "kamień")
    ) {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("remis");
    } else if (argPlayerMove == "nieznany ruch") {
      printMessage("nieprawidołowy ruch");
    } else {
      printMessage("wygrał komputer");
    }
  }
}

playGame(3);

document.getElementById("play-rock").addEventListener("click", function () {
  printMessage("Kamień");
});

document.getElementById("play-paper").addEventListener("click", function () {
  printMessage("Papier");
});

document.getElementById("play-scissors").addEventListener("click", function () {
  printMessage("Nożyce");
});
