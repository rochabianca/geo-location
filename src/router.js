import Vue from 'vue';
import Router from 'vue-router';
import GMap from '@/components/home/GMap';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap
    }
  ]
});
