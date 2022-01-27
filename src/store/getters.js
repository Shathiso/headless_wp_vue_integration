export default {
  users(state) {
    return state.users;
  },

  username(state) {
    return state.user.username;
  },

  products(state) {
    return state.products;
  },

  selectedProductsCount(state) {
    return state.selectedProductsCount;
  },

  selectedProducts(state) {
    return state.selectedProducts;
  },

  selectedProductsTotal(state){
    return state.selectedProductsTotal;
  },

  loggedIn(state) {
    return state.user.loggedIn;
  },

  previousUrl(state){
    return state.previousUrl;
  },

  checkingOut(state){
    return state.checkingOut;
  },

  token(state){
    return state.user.token;
  }

}