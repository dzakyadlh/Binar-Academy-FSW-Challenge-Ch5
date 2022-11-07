const gameStatus = document.querySelector(".container--status");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const comrock = document.getElementById("com-rock");
const compaper = document.getElementById("com-paper");
const comscissor = document.getElementById("com-scissor");
const buttons = document.querySelectorAll(".container a")

function computer() {
    var x = Math.floor(Math.random() * 3 + 1);
    return x;
}

function decider(player, computer) {
    const statsText = document.createElement('p');
    if (player > computer) {
        statsText.textContent = `PLAYER 1 WIN`;
    }
    else if(player < computer){
        statsText.textContent = `COM WIN`;
    }
    else if(player == computer){
        statsText.textContent = `DRAW`;
    }
    statsText.setAttribute("id", "statsText");
    gameStatus.append(statsText);
}

function playerPick(player) {
    if (player == 1) {
        rock.style.backgroundColor = "#ccccff";
        rock.style.boxShadow = "0 0 5px gray";
    }
    else if (player == 2) {
        paper.style.backgroundColor = "#ccccff";
        paper.style.boxShadow = "0 0 5px gray";
    }
    else if (player == 3) {
        scissor.style.backgroundColor = "#ccccff";
        scissor.style.boxShadow = "0 0 5px gray";
    }
}

function comPick(com) {
    if (com == 1) {
        comrock.style.backgroundColor = "#ccccff";
        comrock.style.boxShadow = "0 0 5px gray";
    }
    else if (com == 2) {
        compaper.style.backgroundColor = "#ccccff";
        compaper.style.boxShadow = "0 0 5px gray";
    }
    else if (com == 3) {
        comscissor.style.backgroundColor = "#ccccff";
        comscissor.style.boxShadow = "0 0 5px gray";
    }
}

function refresh() {
    window.location.reload();
}

function roshambo (player) {
    var computers = computer();
    playerPick(player);
    comPick(computers);
    document.getElementById("vs").style.display = "none";
    gameStatus.style.opacity = "1";
    decider(player, computers);
    for(i = 0; i < buttons.length; i++){
        buttons[i].style.pointerEvents = "none";
    }
    buttons[3].style.pointerEvents = "auto";
}