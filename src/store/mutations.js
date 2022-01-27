import router from '../router'

export default {

  SET_USERS(state, payload) {
    state.users.push(payload.users)
  },

  SET_USER_DATA(state, payload) {
    state.user.token = payload.data.token;
    state.user.email = payload.data.user_email;
    state.user.name = payload.data.user_nicename;
    state.user.username = payload.username;

    state.user.loggedIn = true;
  },

  SET_ADMIN_DATA(state, payload) {
    state.admin.token = payload.data.token;
  },

  SET_CHECKING_OUT(state){
    state.checkingOut = true;
  },

  SET_PRODUCTS(state, payload) {
    state.products = payload.products
  },

  ADD_TO_CART(state, payload) {
    state.selectedProductsCount++;
    state.selectedProductsTotal +=  parseInt(payload.book.prices.regular_price);

    if(!state.selectedProducts.includes(payload.book)) {
      payload.book['quantity'] = 1;
      state.selectedProducts.push(payload.book);
    } else{
      let book = state.selectedProducts.find(o => o.name === payload.book.name);
      book['quantity']++;
    }
  },

  REMOVE_FROM_CART(state, payload) {
    
    if(payload.book['quantity'] > 1) {
      for(let x = 0; x < payload.book['quantity']; x++){
        state.selectedProductsTotal -=  parseInt(payload.book.prices.regular_price);
        state.selectedProductsCount--;
      }
    }
    else{
      state.selectedProductsTotal -=  parseInt(payload.book.prices.regular_price);
      state.selectedProductsCount--;
    }
    
    state.selectedProducts = state.selectedProducts.filter(m => m.id !== payload.book.id);
  },

  REMOVE_ITEM_FROM_CART(state, payload) {
    if(payload.book['quantity'] > 1) {
      state.selectedProductsTotal -=  parseInt(payload.book.prices.regular_price);
      state.selectedProductsCount--;
      payload.book['quantity']--;
    }
  },


  SET_REGISTER_DATA(state, payload) {
    state.registeringUserDetails.firstname = payload.form.firstname,
    state.registeringUserDetails.email = payload.form.email,
    state.registeringUserDetails.username = payload.form.username,
    state.registeringUserDetails.password = payload.form.password
  },

  CLEAR_REGISTER_DATA(state) {
    state.registeringUserDetails.firstname = "",
    state.registeringUserDetails.email = "",
    state.registeringUserDetails.username = "",
    state.registeringUserDetails.password = ""
  },

  LOGOUT(state) {
    state.user.loggedIn = false,
    state.user.token = '',
    state.user.name = '',
    state.user.email = '',
    state.user.username = ''
    router.push('/');
  }

}
