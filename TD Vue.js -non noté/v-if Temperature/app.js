const app = Vue.createApp({
    data() {
        return {
            celsius: 0
        };
    },
    computed: {
        fahrenheit() {
            return (this.celsius * 9/5) + 32;
        }
    }
});

app.mount('#app');