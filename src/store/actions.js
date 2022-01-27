import router from "../router";

const db = "http://localhost/headless_vue/admin/wp-json";

export default{ 

  async login({ commit, state }, payload){
      let data = {
        username: payload.username,
        password: payload.password
      }

      let url = `${db}/jwt-auth/v1/token`;
      await fetch(url, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(data),
     })
     .then((u) => u.json())
     .then(resp => {
      if(resp.success) {
        commit('SET_USER_DATA', {
          data: resp.data,
          username: data.username
        });
      }
        return resp;

     })
     .catch((error) => {
      commit('LOGOUT')
       return error;
     });

  },

  async loginAdmin({ commit, state, dispatch }, payload){
    let data = {
      username: process.env.VUE_APP_ADMIN_USERNAME,
      password:  process.env.VUE_APP_ADMIN_PASSWORD
    }

    commit('SET_REGISTER_DATA',{
       form: payload.form
    });

    let url = `${db}/jwt-auth/v1/token`;
    await fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data),
   })
   .then((u) => u.json())
   .then(resp => {
    if(resp.success) {
      commit('SET_ADMIN_DATA', {
        data: resp.data
      });

      dispatch('registerUser')
    }
      return true;

   })
   .catch((error) => {
     return error;
   });

},
  
  checkingOut({commit}) {
    commit('SET_CHECKING_OUT');
  },

  validate({ state }) {
    let url = `${db}/jwt-auth/v1/token/validate`;
     fetch(url, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${state.user.token}`
      }
    }).then(resp => {
      
    }).catch((error) => {
      console.log(error);
    });
  },

  fetchUsers({commit, state}, payload) {
    let url = `${db}/wp/v2/users`;
     fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((u) => u.json())
    .then(resp => {
      commit('SET_USERS', {
        users: resp
      });
    })
    .catch((error) => {
      console.log(error);
    });
  },
  
  fetchProducts({commit, state}, payload) {
    let url = `${db}/wc/store/products`;
     fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((r) => r.json())
    .then(resp => {
      commit('SET_PRODUCTS', {
        products: resp
      });
    })
    .catch((error) => {
      console.log(error);
    });
  },

  addToCart({commit, state}, payload) {
    commit('ADD_TO_CART', {
      book: payload.book
    });
  },

  removeFromCart({commit, state}, payload) {
    commit('REMOVE_FROM_CART', {
      book: payload.book
    });
  },

  removeItemFromCart({commit, state}, payload) {
    commit('REMOVE_ITEM_FROM_CART', {
      book: payload.book
    });
  },

   async registerUser({commit, state}, payload) {

      const url = `${db}/wp/v2/users`;
      let data = {
        username: state.registeringUserDetails.firstname,
        firstname: state.registeringUserDetails.firstname,
        email: state.registeringUserDetails.email,
        password: state.registeringUserDetails.password
      };

       await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${state.admin.token}`
        },
          body: JSON.stringify(data),
        })
        .then((u) => u.json())
        .then(resp => {
      
        if(resp) {
          commit('CLEAR_REGISTER_DATA');
          router.push('/login');
        }
     })
       .catch((error) => {
         return error;
       })
  },

  logout({commit, state}, payload) {
    commit('LOGOUT', {});
  },

}