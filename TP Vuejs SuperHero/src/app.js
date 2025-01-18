const { createApp } = Vue;

createApp({
    data() {
        return {
            superheros: [],
            show: false, // Propriété pour contrôler l'affichage des pouvoirs
            searchQuery: '' // Propriété pour la recherche
        };
    },

    computed: {
        filteredSuperheros() {
            return this.superheros.filter(hero => 
                hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },

    methods: {
    resetSearch() {
        this.searchQuery = '';
    }
},
//Étape n°3 : Ajout de la méthode mounted
    mounted() {
        // Charger les données des superhéros
        axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
            .then(response => {
                this.superheros = response.data; // Récupérer les données des superhéros
            })
            .catch(error => {
                console.log(error);
            });
    }
}).mount('#app');