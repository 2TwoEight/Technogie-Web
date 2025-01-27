type Personne = {
    nom: string;
    age: number;
    estEtudiant: boolean;
};

let personne1: Personne = {
    nom: 'Alice',
    age: 25,
    estEtudiant: true,
};

const displayPersonne = (personne: Personne) => {
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
