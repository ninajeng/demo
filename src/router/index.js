import { createRouter, createWebHashHistory } from 'vue-router';
import UserLayout from '../views/user/LayoutView.vue';
import HomeView from '../views/user/HomeView.vue';
import ProductListView from '../views/user/ProductListView.vue';
import DashboardLayout from '../views/dashboard/LayoutView.vue';
import DashboardLoginView from '../views/dashboard/LoginView.vue';
import DashboardProductListView from '../views/dashboard/ProductListView.vue';

const webName = 'Vegetable Shop';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            title: webName,
          },
        },
        {
          path: 'products',
          name: 'products',
          component: ProductListView,
          meta: {
            title: `${webName} - 產品列表`,
          },
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboardLayout',
      component: DashboardLayout,
      redirect: {
        name: 'login',
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: DashboardLoginView,
          meta: {
            title: `${webName} - 後台登入`,
          },
        },
        {
          path: 'products',
          component: DashboardProductListView,
          meta: {
            title: `${webName} 後台 - 產品列表`,
          },
        },
      ],
    },
  ],
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
