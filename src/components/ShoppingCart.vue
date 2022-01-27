<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="600px">
      <v-card class="tw-relative">
        <perfect-scrollbar class="tw-relative">
          <v-card-title class=" tw-flex  tw-z-10 tw-bg-white tw-w-full tw-px-0 tw-pt-0">
            <div class="tw-flex tw-justify-between tw-w-full tw-px-4 tw-py-3 " style="background-color:#2c7083">
              <span class="tw-text-white ">Shopping Cart</span>
              <v-btn color="primary">
              <v-icon
                @click="deactivate"
                color="white"
              > 
              mdi-close
              </v-icon>
              </v-btn>
            </div>
            <div class="tw-mt-3 tw-w-full tw-px-4 tw-text-xl tw-text-left price">
              Total Amount : R {{ selectedProductsTotal }}, 00
            </div>
          </v-card-title>
            <hr />
      
            <div class="tw-mt-1 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2  tw-gap-6">
              <v-card-text  v-for="book in selectedProducts" :key="book.id" class="tw-text-left tw-relative">
                <div class="">
                  <v-icon color="red" 
                    title="Remove" 
                    class="tw-absolute tw-right-11 tw-top-4"
                    @click="removeFromCart(book)">
                    mdi-delete
                  </v-icon>

                  <v-card width="40" elevation="5" class="tw-inline-block tw-text-left">
                  <v-img
                    height="70"
                    width="50"
                    elevation="4"
                    :src="book.images[0].src"
                    class="tw-border-0"
                  ></v-img>
                  </v-card>
                  <div class=" tw-px-0 tw-relative tw-inline-block tw-ml-3" >
                    <div class="title tw-mb-6">{{ book.name }}</div> 
                    
                    <div class="price tw-mt-2">
                      {{ book.prices.currency_symbol }} 
                      {{ book.prices.regular_price }}
                    </div>
                  </div>

                  <div class="tw-mt-0 tw-absolute tw-right-3 tw-bottom-8 text-emphasis">
                    <div class="tw-text-center">
                      Qty
                    </div>  

                    <v-btn x-small color="#2c7083" 
                      @click="removeItemFromCart(book)"
                      :disabled=" book['quantity'] == 1" 
                      class="tw-rounded-l-full tw-mr-1">
                      <v-icon color="white" small>mdi-minus</v-icon>
                    </v-btn>

                      {{ book['quantity'] }}

                    <v-btn x-small color="#2c7083"
                      @click="addToCart(book)"
                      class="tw-rounded-r-full tw-ml-1">
                      <v-icon color="white" small>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
        
                <hr class="mt-3" />
        
              </v-card-text>
            </div>
            <v-card-text v-if="selectedProductsCount == 0" class="tw-my-10">
              Your Shopping Cart is Empty..
            </v-card-text>
  
        </perfect-scrollbar>
        <div class=" tw-mb-2">
          <v-btn rounded color="rgb(44, 112, 131)" 
            dark class="tw-w-xs"
            :disabled=" selectedProductsCount == 0"
            @click="checkout"
             >
            <v-icon>
              mdi-list
            </v-icon>
            Checkout
          </v-btn> 
        </div>
      </v-card>
    </v-dialog>
  </v-row>
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
   },

   loggedIn() {
     return this.$store.getters.loggedIn;
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

    addToCart(book){
      this.$store.dispatch('addToCart', {
        book: book
      })
    },

    removeFromCart(book){
      this.$store.dispatch('removeFromCart', {
       book: book
      })
    },

    removeItemFromCart(book){
       this.$store.dispatch('removeItemFromCart', {
       book: book
      })
    },

    checkout(){
      this.show = false;
      this.$store.dispatch('checkingOut');
      if(!this.loggedIn){
        this.$router.push('/login');
      } else{
         this.$router.push('/checkout');
      }

    }
 }

}
</script>

<style scoped>
  .title{
    font-family: 'Waterfall', cursive !important;
    font-size: 30px !important;
    font-weight: bold;
  }

  .price{
    font-family: 'Cabin', sans-serif !important;
    color: #2c7083;
    font-size: 17px;
  }

  .text-emphasis{
    font-family: 'Cabin', sans-serif !important;
    font-size: 16px;
  }

  .ps {
    height: 470px;
  }
</style>