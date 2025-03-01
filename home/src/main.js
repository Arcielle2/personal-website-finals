import { createApp } from 'vue';
import App from './App.vue';
import Book from './components/Book.vue'

createApp(App).mount('#app');
app.component('book', Book)
