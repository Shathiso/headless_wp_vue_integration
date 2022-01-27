
 import Vue from 'vue'
 import vuetify from "./plugins/vuetify";
 import App from './App.vue';
 import router  from './router';
 import Vuex from 'vuex'
 import store from './store'
 import VueResource from 'vue-resource'
 import '@/assets/css/tailwind.css'
 import PerfectScrollbar from 'vue2-perfect-scrollbar'
 import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'


Vue.use(PerfectScrollbar)

 Vue.use(VueResource);
 

 Vue.use(Vuex);
 Vue.use(vuetify);

 
  new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
  }).$mount('#app')
  
 