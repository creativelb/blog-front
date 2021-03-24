import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const Home = () => import('../views/home/Home.vue');
const Detail = () => import('../views/detail/Detail.vue');

const List = () => import('../views/home/list/List.vue');
const Category = () => import('../views/home/category/Category.vue');
const Tag = () => import('../views/home/tag/Tag.vue');
const Reward = () => import('../views/home/reward/Reward.vue');
const AboutMe = () => import('../views/home/aboutMe/AboutMe.vue');

let routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'list'
      },
      {
        path: 'list',
        name: 'List',
        component: List
      },
      {
        path: 'category',
        name: 'Category',
        component: Category
      },
      {
        path: 'tag',
        name: 'Tag',
        component: Tag
      },
      {
        path: 'reward',
        name: 'Reward',
        component: Reward
      },
      {
        path: 'aboutme',
        name: 'AboutMe',
        component: AboutMe
      },
    ]
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