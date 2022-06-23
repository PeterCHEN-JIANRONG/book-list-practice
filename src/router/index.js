import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'Book List Page',
    component: () => import('../views/BookList.vue'),
  },
  {
    path: '/books/:bookId',
    name: 'Book Detail Page',
    component: () => import('../views/BookDetail.vue'),
  },
  {
    path: '/newBook',
    name: 'New Book',
    component: () => import('../views/BookNew.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 切換頁面時滾至頂部
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
