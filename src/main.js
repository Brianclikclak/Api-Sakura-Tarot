import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CardsComponent from './components/CardsComponent.vue';
import App from './App.vue'
import router from './router';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('CardsComponent', CardsComponent);
app.mount('#app')
