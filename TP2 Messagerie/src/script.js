let compteur = 0;

function Deplacer() {
    const textarea = document.getElementById("clavier");
    const affichage = document.querySelector(".affichage");
    const messageContainer = document.createElement('div');
    
    messageContainer.innerHTML = `<p>${textarea.value}</p>`;
    
    if (compteur % 2 === 0) {
        messageContainer.classList.add('texte', 'droite');
    } else {
        messageContainer.classList.add('texte', 'gauche');
    }
    
    affichage.appendChild(messageContainer);
    textarea.value = "";
    
    compteur++;
}

function ModifierAspectClavier() {
    const clavier = document.getElementById("clavier");
    clavier.style.resize = "vertical";
    clavier.style.overflow = "auto";
    clavier.style.width = "50%";
    clavier.style.minWidth = "400px";
}

window.addEventListener("load", ModifierAspectClavier);