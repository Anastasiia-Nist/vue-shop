// default
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Pages
import HomePage from '@/pages/HomePage';
import NotesPage from '@/pages/NotesPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';

// Routering
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesPage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
    {
      path: '/shop/:id',
      name: 'product',
      component: ProductPage,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFoundPage,
    },
  ],
});
