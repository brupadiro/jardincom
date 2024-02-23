import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/pages/index';
import Cart from '@/pages/cart';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/cart',
    name: '/cart',
    component: Cart,
    props: {
      default: true,
    },

  }
];

const router = new VueRouter({
  routes
});

export default router;
