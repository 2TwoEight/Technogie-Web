"use strict";
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    i++;
    if (compteur) {
        const span = compteur.querySelector('span');
        if (span) {
            span.innerText = i.toString();
        }
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
