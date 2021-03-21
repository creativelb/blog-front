import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const Home = () => import('../views/home/Home.vue');
const Detail = () => import('../views/detail/Detail.vue');

let routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
];

let router = new VueRouter({
  mode: 'hash',
  routes
})

export default router;