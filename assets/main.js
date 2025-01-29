let participants = [];
let winners = [];
let participant = document.getElementById("participant");
let item = document.getElementById("item");
let participantsList = document.getElementById("participantsList");
let winnerResult = document.getElementById("winnerResult");
let titleItem = document.getElementById("title");

function Add() {
    if (item.value !== "") {
        titleItem.innerHTML = item.value;
        item.style.display = "none"
        item.value = "";
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
        winnerResult.innerHTML += `${participants[0]} its the winner! and got ${titleItem.innerHTML}!`;
        participants.shift(participant[0]);
        participantsList.innerHTML = participants.map(p => `<p>${p}</p>`).join("");
        // participantsList.innerHTML = "";
        // titleItem.innerHTML = "";
        // item.style.display = "inline"
        // participants.length = 0
    }

    setTimeout(() => {
        winnerResult.innerHTML = "";
    }, 2000);
}

function Reset() {
    winnerResult.innerHTML = "";
    titleItem.innerHTML = "";
    participantsList.innerHTML = "";
    item.value = "";
    participant.value = "";
    item.style.display = "inline"
    participants.length = 0
}
