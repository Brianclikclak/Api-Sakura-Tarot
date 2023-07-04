import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SelectedCards from '../views/SelectedCards.vue';
import vue from 'vue';
import Router from 'vue-router';
vue.use(Router);

Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cards',
      name: 'cards',
      component: SelectedCards
    },
    
   
  ]
})

export default router;