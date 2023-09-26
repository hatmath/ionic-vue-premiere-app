import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PageUn from '../views/PageUn.vue';
import PageDeux from '../views/PageDeux.vue';
import PageTrois from '../views/PageTrois.vue';
import PageQuatre from '../views/PageQuatre.vue';
import HomePage from '../views/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/pageUn',
    name: 'PageUn',
    component: PageUn
  },
  {
    path: '/pageDeux',
    name: 'PageDeux',
    component: PageDeux
  },
  {
    path: '/pageTrois',
    name: 'PageTrois',
    component: PageTrois
  },
  {
    path: '/pageQuatre',
    name: 'PageQuatre',
    component: PageQuatre
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
