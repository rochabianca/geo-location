import Vue from 'vue';
import Router from 'vue-router';
import GMap from '@/components/home/GMap';
import Signup from '@/components/auth/Signup';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
});
