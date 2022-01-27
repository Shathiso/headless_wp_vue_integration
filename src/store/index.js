import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
import Actions from './actions'
import Mutations from './mutations'
import Getters from './getters'
import State from './state'

Vue.use(Vuex)
const LocalStorageKey = '__headless_db__';


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,

  key: LocalStorageKey,

 /* reducer: (state) => ({
    users: state.users,
    loggedIn: state.user.loggedIn,
    token:  state.user.token,
    name:  state.user.name,
    email:  state.user.email,
    username:  state.user.username,
    loading: state.loading,
    products:state.products,
    selectedProductsCount: state.selectedProductsCount,
    selectedProducts: state.selectedProducts,
    selectedProductsTotal: state.selectedProductsTotal,
  })*/
});

const store = new Vuex.Store({

  state () {
    return State
  },
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
  //plugins: [vuexLocal.plugin]

});

export default store;

