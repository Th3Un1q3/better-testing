import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LessonsIndex from '../views/LessonsIndex.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LessonsIndex',
    component: LessonsIndex,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
