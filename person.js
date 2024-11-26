const params = new URLSearchParams(window.location.search);
const personName = params.get("nom");
document.getElementById("personName").textContent = `Estadístiques de ${personName}`;

const form = document.getElementById("formulariApostes");
const taula = document.getElementById("historialApostes");
const balançElement = document.getElementById("balançTotal");
const graficaBalanç = document.getElementById("graficaBalanç").getContext("2d");

function actualitzarUI() {
    const apostes = JSON.parse(localStorage.getItem(personName)) || [];
    const balanç = apostes.reduce((acc, aposta) => acc + aposta.guany, 0);

    taula.innerHTML = apostes.map((a, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${a.importAposta} €</td>
            <td>${a.quota}</td>
            <td>${a.esport}</td>
            <td>${a.resultat}</td>
            <td>${a.guany.toFixed(2)} €</td>
            <td><button onclick="eliminarAposta(${index})">Eliminar</button></td>
        </tr>
    `).join("");

    balançElement.textContent = `${balanç.toFixed(2)} €`;

    const balanços = apostes.map((_, i) =>
        apostes.slice(0, i + 1).reduce((acc, aposta) => acc + aposta.guany, 0)
    );

    new Chart(graficaBalanç, {
        type: 'line',
        data: {
            labels: apostes.map((_, i) => `Aposta ${i + 1}`),
            datasets: [{
                label: "Balanç",
                data: balanços,
                borderColor: 'blue',
                fill: false,
            }],
        },
    });
}

function guardarAposta(event) {
    event.preventDefault();

    const importAposta = parseFloat(document.getElementById("import").value);
    const quota = parseFloat(document.getElementById("quota").value);
    const esport = document.getElementById("esport").value;
    const resultat = document.getElementById("resultat").value;
    const guany = resultat === "guanyat" ? importAposta * (quota - 1) : -importAposta;

    const aposta = { importAposta, quota, esport, resultat, guany };

    const apostes = JSON.parse(localStorage.getItem(personName)) || [];
    apostes.push(aposta);
    localStorage.setItem(personName, JSON.stringify(apostes));

    actualitzarUI();
}

function eliminarAposta(index) {
    const apostes = JSON.parse(localStorage.getItem(personName)) || [];
    apostes.splice(index, 1);
    localStorage.setItem(personName, JSON.stringify(apostes));

    actualitzarUI();
}

form.addEventListener("submit", guardarAposta);
actualitzarUI();
