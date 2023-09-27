import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageUn from '../views/PageUn.vue';
import PageDeux from '../views/PageDeux.vue';
import PageTrois from '../views/PageTrois.vue';
import PageQuatre from '../views/PageQuatre.vue';
import Calculatrice from '../views/Calculatrice.vue';
import CycleDeVie from '../views/CycleDeVie.vue';
import Fetch from '../views/Fetch.vue';
import Geo from '../views/Geo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/pageUn',
    name: 'Page Un',
    component: PageUn
  },
  {
    path: '/pageDeux',
    name: 'Page Deux',
    component: PageDeux
  },
  {
    path: '/pageTrois',
    name: 'Page Trois',
    component: PageTrois
  },
  {
    path: '/pageQuatre',
    name: 'Page Quatre',
    component: PageQuatre
  },
  {
    path: '/calculatrice',
    name: 'Calculatrice',
    component: Calculatrice
  },
  {
    path: '/cycledevie',
    name: 'Cycle De Vie',
    component: CycleDeVie
  },
  {
    path: '/fetch',
    name: 'Fetch JSON',
    component: Fetch
  },
  {
    path: '/geo',
    name: 'Geolacalisation',
    component: Geo
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
