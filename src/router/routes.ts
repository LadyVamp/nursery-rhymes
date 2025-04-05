import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/nursery-rhymes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NurseryRhymesPage.vue') }],
  },
  {
    path: '/sleepers',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SleepersPage.vue') }],
  },
  {
    path: '/dev',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DevPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
