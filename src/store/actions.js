
let db = "http://localhost/headless_vue/admin/wp-json";

export default{ 
  
  fetchProducts({commit, state}, payload) {
    let url = `${db}/wc/store/products`;
     fetch(url, {
      method: 'GET',
      mode: 'cors',
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
  }


}