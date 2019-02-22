import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import GMap from '@/components/home/GMap';
import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  // check to see if route require auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      // user is signed in, procced to route
      next();
    } else {
      // no user signed in, redirect to login
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
