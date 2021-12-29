import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'
import Actions from './actions'
import Mutations from './mutations'
import Getters from './getters'
import State from './state'

Vue.use(Vuex)
const LocalStorageKey = '__headless_db__';


/*const vuexLocal = new VuexPersistence({
  storage: window.localStorage,

  key: LocalStorageKey,

  reducer: (state) => ({
    //products: state.products
  })
});*/

const store = new Vuex.Store({

  state () {
    return State
  },
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
 // plugins: [vuexLocal.plugin]

});


export default store;

