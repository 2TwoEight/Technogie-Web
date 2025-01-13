const app = Vue.createApp({
    data() {
        return {
            nom: '',
            BvnMsg: ''
        };
    },
    methods: {
        MessageBienvenue() {
            this.BvnMsg = `Bienvenue, ${this.nom} !`;
        }
    }
});

app.mount('#app');