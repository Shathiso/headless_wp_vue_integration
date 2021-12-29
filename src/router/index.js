import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'

  Vue.use(VueRouter)

  const routes = [
    { path: '/', 
    name: 'Home',
    component: Home 
  },
  { path: '/login', 
    name: 'Login',
    component: Login 
  },
  { path: '/register', 
    name: 'Register',
    component: Register 
  },
  ];

  const router = new VueRouter({
    routes
  });

  export default router;