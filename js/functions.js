function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function getMoveName(number) {
  if (number == "1") {
    return "kamień";
  } else if (number == "2") {
    return "papier";
  } else if (number == "3") {
    return "nożyce";
  } else {
    return "nieznany ruch";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (
    (argComputerMove == "kamień" && argPlayerMove == "papier") ||
    (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
    (argComputerMove == "nożyce" && argPlayerMove == "kamień")
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
