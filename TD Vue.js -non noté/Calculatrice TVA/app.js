const app = Vue.createApp({
    data() {
        return {
            ht: 0,
            tva: 20,
            ttc: 0
        }; 
    },
    methods: {
        calculTtc() {
            this.ttc = this.ht * (1 + this.tva / 100);
            
        }
    }
});
    

app.mount('#app');