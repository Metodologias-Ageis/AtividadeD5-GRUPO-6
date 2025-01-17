import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    children: [
      {
        path: 'login',
        name: 'main-login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
      },
      {
        path: 'home',
        name: 'main-home',
        children: [
          {
            path: 'about',
            name: 'main-home-about',
            component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
          }
        ],
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
