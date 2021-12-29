<template>
  <div class="">
    <v-card
    :loading="loading"
    v-if="show"
    class="tw-fixed tw-top-16 tw-right-0 tw-z-10 tw-max-h-screen tw-w-80 "
    height="470"
    id="shopping_cart"
    ref="cart"
  >

  <perfect-scrollbar class="tw-relative">
    <v-card-title class=" tw-fixed tw-flex  tw-z-10 tw-bg-white tw-w-full tw-px-0 tw-pt-0">
      <div class="tw-flex tw-w-full tw-px-2 tw-py-3 " style="background-color:#2c7083">
        <span class="tw-text-white">Shopping Cart</span>
    
        <v-icon
          @click="deactivate"
          color="white"
          class="tw-ml-36"
        > 
        mdi-close
        </v-icon>
      </div>
      <div class="tw-mt-3 tw-w-full tw-px-4 tw-text-xl tw-text-left price">
        Total Amount : R {{ selectedProductsTotal }}, 00
      </div>
    </v-card-title>

    <hr />

    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    
    <div class="tw-mt-24">
      <v-card-text  v-for="book in selectedProducts" :key="book.id" class="tw-text-left tw-mt-4">
        <div class="tw-flex tw-justify-between">
          <v-card width="40" elevation="5" class="tw-inline-block tw-text-left">
          <v-img
            height="70"
            width="40"
            elevation="4"
            :src="book.images[0].src"
            class="tw-border-0"
          ></v-img>
          </v-card>
          <span class="text-right">
            <v-icon color="red" title="Remove" @click="removeFromCart(book)">mdi-delete</v-icon>
            <div class="tw-mt-4 text-emphasis">
            Qty : {{ book['quantity'] }}
          </div>
          </span>
          
        </div>

        <v-card-title class="tw-flex tw-justify-between tw-px-0 " >
          <span class="title">{{ book.name }}</span> 
          <span class="price">
            {{ book.prices.currency_symbol }} 
            {{ book.prices.regular_price }}
          </span>
        </v-card-title>

        <hr />

      </v-card-text>
    </div>

    <v-card-text v-if="selectedProductsCount == 0" class="tw-my-10">
      Your Shopping Cart is Empty..
    </v-card-text>

  </perfect-scrollbar>
  </v-card>

  </div>
</template>

<script>
import gsap from "gsap"

export default {
 name:'ShoppingCart',

 data () {
   return {
     loading: false,
     show: false
   }
 },

 computed:{
   selectedProducts() {
     return this.$store.getters.selectedProducts;
   },

   selectedProductsCount() {
     return this.$store.getters.selectedProductsCount;
   },

   selectedProductsTotal() {
     return this.$store.getters.selectedProductsTotal;
   }
 },

 methods: {
   activate() {

     gsap.from(this.$refs.cart, {
       opacity: 0, 
       xPercent: 10,
       duration: 1.2
    });
    this.show = true;
   },

   deactivate() { 

     gsap.to(this.$refs.cart, {
       opacity: 0, 
       xPercent: -10,
       duration: 1.2
    });
    this.show = false;
   },

   removeFromCart(book){
     this.$store.dispatch('removeFromCart', {
       book: book
     })
   }
 }

}
</script>

<style scoped>
  .title{
    font-family: 'Waterfall', cursive !important;
    font-size: 36px !important;
    font-weight: bold;
  }

  .price{
    font-family: 'Cabin', sans-serif !important;
    letter-spacing: 0.2px !important;
    font-weight: bold !important;
    color: #2c7083;
  }

  .text-emphasis{
    font-family: 'Cabin', sans-serif !important;
    letter-spacing: 0.2px !important;
    font-size: 19px;
  }

  .ps {
    height: 470px;
  }
</style>