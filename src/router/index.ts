import { createRouter, createWebHistory } from 'vue-router'
import Readme from '../views/Readme.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Readme,
    },
    {
      path: '/day01',
      name: 'Expand Card',
      component: () => import('@/views/ExpandCard.vue'),
      meta: {
        title: 'Expand Card',
      },
    },
    {
      path: '/progress-steps',
      name: 'Progress Steps',
      component: () => import('@/views/ProgressSteps.vue'),
      meta: {
        title: 'Progress Steps',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title ? to.meta.title as string : '50Projects50Days'
  next()
})

export default router
