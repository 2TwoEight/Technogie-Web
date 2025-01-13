const app = Vue.createApp({
    data() {
        return {
            nom: '',
            email: '',
            dateArrivee: '',
            dateDepart: '',
            nbNuits: 0,
            tarif: 100,
            reservationValidee: false
        };
    },
    methods: {
        validerReservation() {
            if (this.dateArrivee && this.dateDepart) {
                const arrivee = new Date(this.dateArrivee);
                const depart = new Date(this.dateDepart);
                if (depart > arrivee) {
                    const timeDiff = Math.abs(depart - arrivee);
                    this.nbNuits = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                    this.reservationValidee = true;
                } else {
                    alert("La date de départ doit être après la date d'arrivée.");
                }
            } else {
                alert("Veuillez saisir des dates valides.");
            }
        }
    }
});

app.mount('#app');