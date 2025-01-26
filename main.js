let participants = [];
let participant = "";
let item = prompt("Escreva um item:");

if (item != "") {
    while (participant != "parar") {
        participant = prompt("Escreva um nome:")
        if (participant != "parar" && participant != "") {
            participants.push(participant)
        }
    }

    if (participants.length > 0) {
        for (let i = participants.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [participants[i], participants[j]] = [participants[j], participants[i]]; // Fisher-Yates (ou Knuth shuffle)
        }
        console.log(`${participants[0]} é o vencedor e ganhou ${item}`)
    } else {
        console.log("Nenhum participante adicionado.")
    }
}
