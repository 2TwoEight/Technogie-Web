// Étape N°3 : Définir un tableau pour contenir les tâches
let tasks = [];
// Étape N°18 : Créer un tableau de booléens pour représenter l'état "Terminée" de chaque tâche
let TableauTermine = [];

// Étape N°4 : Fonction pour ajouter une tâche
function ajouterTache() {
    let NomTache = document.getElementById('tache').value.trim();
    let DescriptionTache = document.getElementById('description').value.trim();
    
    if (NomTache && DescriptionTache) {
        tasks.push({ name: NomTache, description: DescriptionTache });
        TableauTermine.push(false);
        ajouterTacheHTML(NomTache, DescriptionTache);
        document.getElementById('tache').value = '';
        document.getElementById('description').value = '';
    }
}

// Fonction pour ajouter la tâche à l'HTML
function ajouterTacheHTML(tache, description) {
    let table = document.querySelector('table') || createTable();
    let tbody = table.querySelector('tbody');
    let row = document.createElement('tr');
    
    row.innerHTML = `
        <td><input type="checkbox" id="${TableauTermine.length - 1}" onchange="Cocher(event)"></td>
        <td style="text-align: center; vertical-align: middle;">${tasks.length}</td>
        <td>${tache}</td>
        <td>${description}</td>
        <td><button onclick="supprimerTache(this.parentElement.parentElement, ${TableauTermine.length - 1})">Supprimer</button></td>
    `;
    
    tbody.appendChild(row);
}

// Fonction pour créer la table
function createTable() {
    let table = document.createElement('table');
    document.body.appendChild(table);
    
    table.innerHTML = `
        <caption>Liste des tâches</caption>
        <thead>
            <tr>
                <th style="width: 10px; text-align: center; vertical-align: middle;">Terminée</th>
                <th style="width: 10px; text-align: center; vertical-align: middle;">Numéro</th>
                <th>Libellé</th>
                <th>Description</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    
    return table;
}

// Fonction pour supprimer une tâche
function supprimerTache(row, index) {
    row.remove();
    tasks.splice(index, 1);
    TableauTermine.splice(index, 1);
    updateIndices();
}

// Met à jour les indices des cases à cocher et des boutons de suppression
function updateIndices() {
    document.querySelectorAll('tbody tr').forEach((row, i) => {
        row.cells[0].querySelector('input').id = i;
        row.cells[1].textContent = i + 1;
        row.cells[4].querySelector('button').setAttribute('onclick', `supprimerTache(this.parentElement.parentElement, ${i})`);
    });
}

// Fonction pour gérer le changement d'état de la case à cocher
function Cocher(event) {
    let checkbox = event.target;
    let index = parseInt(checkbox.id);
    TableauTermine[index] = checkbox.checked;
    let cell = document.querySelectorAll('tbody tr')[index].cells[2];
    cell.innerHTML = checkbox.checked ? `<s>${cell.textContent}</s>` : cell.textContent;
}

// Fonction pour filtrer les tâches
function filterTasks(filterType) {
    document.querySelectorAll('tbody tr').forEach((row, index) => {
        let isCompleted = TableauTermine[index];
        row.style.display = (filterType === 'all' || (filterType === 'completed' && isCompleted) || (filterType === 'not_completed' && !isCompleted)) ? '' : 'none';
    });
}

// S'assurer que le DOM est entièrement chargé avant d'attacher l'écouteur d'événement
document.addEventListener('DOMContentLoaded', function() {
    let button = document.createElement('button');
    button.textContent = 'Ajout de tache';
    button.classList.add('spacing');
    
    let inputTache = document.createElement('input');
    inputTache.type = 'text';
    inputTache.id = 'tache';
    inputTache.placeholder = 'Nom de la tâche';
    inputTache.classList.add('spacing');
    
    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description';
    inputDescription.placeholder = 'Description de la tâche';
    inputDescription.classList.add('spacing');
    
    let selectFilter = document.createElement('select');
    selectFilter.id = 'filter';
    selectFilter.classList.add('spacing');
    
    selectFilter.innerHTML = `
        <option value="all">Toutes les tâches</option>
        <option value="completed">Tâches terminées</option>
        <option value="not_completed">Tâches non terminées</option>
    `;
    
    document.body.append(inputTache, inputDescription, button, selectFilter);
    
    button.addEventListener('click', ajouterTache);
    selectFilter.addEventListener('change', (event) => filterTasks(event.target.value));
});