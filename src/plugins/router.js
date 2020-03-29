import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../layout/Home.vue';
import Login from '../pages/Login.vue';
import NoPage from '../pages/NoPage.vue';
import User from '../pages/User.vue';
import Reg from '../pages/Reg.vue';
import ZhangHao from '../pages/ZhangHao.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/ZhangHao',component:ZhangHao},
  {path:'/User',component:User,name:"User"},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes
})

export default router;