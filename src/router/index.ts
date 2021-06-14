import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import LessonsIndex from '@/views/LessonsIndex.vue';
import MainLayout from '@/components/MainLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: LessonsIndex
      },
      {
        path: 'lessons',
        component: MainLayout,
        children: [
          {
            path: '02',
            component: () => import(/* webpackChunkName: "lesson2" */ '@/views/Lesson02.vue'),
          }
        ],
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
