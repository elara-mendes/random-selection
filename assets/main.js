let participants = [] ;
let winners = [];
let participant = document.getElementById("participant");
let item = document.getElementById("item");
let participantsList = document.getElementById("participantsList");
let winnerResult = document.getElementById("winnerResult");
let titleItem = document.getElementById("title");
let drawButton = document.getElementById("drawButton");
let mainHeader = document.querySelector(".main-header");

function Add() {
    if (item.value !== "") {
        titleItem.innerHTML = item.value;
        item.style.display = "none";
        item.value = "";
        mainHeader.style.display = "none";
    }

    if (participant.value !== "") {
        participants.push(participant.value);
        participantsList.innerHTML += `<p>${participant.value}</p>`;
        participant.value = "";
    }
}

function Draw() {
        if (participants.length > 0) {
            for (let i = participants.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [participants[i], participants[j]] = [participants[j], participants[i]]; // Fisher-Yates (ou Knuth shuffle)
            }
        } else {
            console.log("Anyone was added.");
        }

        if (titleItem.innerHTML !== "") {
            winnerResult.innerHTML += `${participants[0]} é o vencedor! e ganhou ${titleItem.innerHTML}!`;
            participants.shift(participants[0]);
            console.log(participants)
            participantsList.innerHTML = participants.map(p => `<p>${p}</p>`).join("");
            drawButton.setAttribute("disabled", "true");
        }

        if (participants.length == 0) {
            titleItem.innerHTML = "";
            item.style.display = "inline";
            mainHeader.style.display = "block";
        }
        
        setTimeout(() => {
            winnerResult.innerHTML = "";
            drawButton.removeAttribute("disabled");
        }, 2500);
}

function Reset() {
    winnerResult.innerHTML = "";
    titleItem.innerHTML = "";
    participantsList.innerHTML = "";
    item.value = "";
    participant.value = "";
    item.style.display = "inline"
    participants.length = 0
    mainHeader.style.display = "block";
}
