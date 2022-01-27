import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'
import Checkout from '../views/checkout'
import NotFound from '../views/notFound'
import store from '../store'

  Vue.use(VueRouter)

  const routes = [
    { path: '/', 
    name: 'Home',
    component: Home
  },
  { path: '/login', 
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.user.token != '') {
        next({
          path: '/',
        })
      } else {
        next()
      }
    }
  },
  { path: '/register', 
    name: 'Register',
    component: Register 
  },
  { path: '/checkout', 
    name: 'Checkout',
    component: Checkout,
    beforeEnter: (to, from, next) => {
      if (store.state.user.token == '') {
        next({
          path: '/login',
        })
      } else {
          next()
      }
    }

  },
  { path: '*', component: NotFound }
  ];


  const router = new VueRouter({
    routes
  });



  export default router;