"use strict";
let personne1 = {
    nom: 'Alice',
    age: 25,
    estEtudiant: true,
};
const displayPersonne = (personne) => {
    const container = document.querySelector("#personne");
    if (container) {
        container.innerHTML = `
            <p>Nom: ${personne.nom}</p>
            <p>Âge: ${personne.age}</p>
            <p>Est étudiant: ${personne.estEtudiant ? 'Oui' : 'Non'}</p>
        `;
    }
};
document.addEventListener("DOMContentLoaded", () => {
    displayPersonne(personne1);
});
