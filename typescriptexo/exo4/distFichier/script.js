"use strict";
let groupe = [
    { nom: 'Alice', age: 25, estEtudiant: true },
    { nom: 'Bob', age: 30, estEtudiant: false },
    { nom: 'Charlie', age: 22, estEtudiant: true }
];
const displayGroupeInTable = (groupe) => {
    const container = document.querySelector("#table-container");
    if (container) {
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Âge</th>
                    <th>Étudiant</th>
                </tr>
            </thead>
            <tbody>
                ${groupe.map(personne => `
                    <tr>
                        <td>${personne.nom}</td>
                        <td>${personne.age}</td>
                        <td>${personne.estEtudiant ? '✔️' : ''}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        container.appendChild(table);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    displayGroupeInTable(groupe);
});
