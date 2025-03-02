import { createApp } from 'vue'
import App from './App.vue'
import Book from './components/Book.vue'

const app = createApp(App)
app.component('book', Book)
app.mount('#app')