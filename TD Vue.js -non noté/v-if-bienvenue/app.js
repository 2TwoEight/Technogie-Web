const app = Vue.createApp({
    data() {
        return {
            language: 'en'
        };
    },
    methods: {
        setLanguage(lang) {
            this.language = lang;
        }
    }
});

app.mount('#app');