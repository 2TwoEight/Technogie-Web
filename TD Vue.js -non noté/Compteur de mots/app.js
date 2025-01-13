const app = Vue.createApp({
    data() {
        return {
            message: '',
            wordCount: 0
        };
    },
    methods: {
        countWords() {
            this.wordCount = this.message.split(' ').filter(word => word !== '').length;
        }
    }
});
    
app.mount('#app');