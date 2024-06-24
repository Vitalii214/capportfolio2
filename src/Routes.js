import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/AppLayout';

// Pages
import Dashboard from './pages/Dashboard/AppDashboard.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
    ],
  },
  ],
});
