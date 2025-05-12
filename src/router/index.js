import { createRouter, createWebHashHistory } from 'vue-router';
import RhymeDetails from '@/components/RhymeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Nursery Rhymes by LadyVamp',
    },
  },
  {
    path: '/cheery-rhymes',
    name: 'CheeryRhymes',
    component: () => import('@/views/CheeryRhymesView.vue'),
    meta: {
      title: 'Потешки',
    },
  },
  {
    path: '/feed-rhymes',
    name: 'FeedRhymes',
    component: () => import('@/views/FeedRhymesView.vue'),
    meta: {
      title: 'Потешки для кормления',
    },
  },
  {
    path: '/sleep-rhymes',
    name: 'SleepRhymes',
    component: () => import('@/views/SleepRhymesView.vue'),
    meta: {
      title: 'Засыпайки',
    },
  },
  {
    path: '/sleep-rhyme/:id',
    name: 'RhymeDetails',
    component: RhymeDetails,
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import('@/views/DevView.vue'),
    meta: {
      title: 'Dev',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
