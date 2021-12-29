export default {

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
  }
}
