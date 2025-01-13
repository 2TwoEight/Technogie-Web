const app = Vue.createApp({
    data() {
        return {
            isTrue: true,
        }
    },
    methods: {
        toggle() {
            this.isTrue = !this.isTrue;
        }
    }
});

app.mount('#app');