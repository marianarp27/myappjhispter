import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);
import Router, { RouteConfig } from 'vue-router';

const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
import account from '@/router/account';
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';
import FormExample from '@/entities/formExample/formExample.vue'; // new - FormExample
import Parent from '@/entities/parentchildcommunication/parent.vue'; // new - communication Parent-Child
import Child from '@/entities/parentchildcommunication/child.vue'; // new - communication Parent-Child
Vue.use(Router);

// prettier-ignore
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    // nova rota para componente 'FormExample'
    {
      path: '/formExample',
      name: 'FormExample',
      component: FormExample,
      meta: { error404: true }
    },
    // novas rotas para componentes 'parent e child'
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      meta: { error404: true }
    },
    {
      path: '/child',
      name: 'Child',
      component: Child,
      meta: { error404: true }
    },
    ...account,
    ...admin,
    entities,
    ...pages
  ]
});

export default router;
