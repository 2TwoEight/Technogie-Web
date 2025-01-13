//Vue3.js
const app = Vue.createApp({
    data() {
        return {
            isChecked: false
        };
    }
});

app.mount('#app');

/*
Vue2.js

const app = new Vue({
    el: '#app',
    data: {
        isChecked: false
    }
});
*/