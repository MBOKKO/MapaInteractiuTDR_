function mostrarRànquing() {
    const participants = ["Marçal", "Marc", "Joan", "Pau"];
    const rankingList = document.getElementById("rankingList");

    const balanços = participants.map(participant => {
        const apostes = JSON.parse(localStorage.getItem(participant)) || [];
        return {
            nom: participant,
            balanç: apostes.reduce((acc, aposta) => acc + aposta.guany, 0),
        };
    });

    balanços.sort((a, b) => b.balanç - a.balanç);

    rankingList.innerHTML = balanços.map(b => `
        <li>${b.nom}: ${b.balanç.toFixed(2)} €</li>
    `).join("");
}

mostrarRànquing();
