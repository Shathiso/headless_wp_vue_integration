<template>
  <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-mx-12">
  <div
    class=" tw-max-w-14 tw-mt-10"
    v-for="book in books"
    :key="book.id"
  >
    <v-card width="170" elevation="5">
    <v-img
      height="220"
      width="170"
      elevation="4"
      :src="book.images[0].src"
      class="tw-border-0"
    ></v-img>
    </v-card>

    <v-card-title class="tw-flex tw-justify-between tw-pl-0 " >
      <span class="title">{{ book.name }}</span> 
    </v-card-title>

    <v-card-text class="tw-p-0 tw-text-left tw-text-lg price">{{ book.prices.currency_symbol }} {{ book.prices.regular_price }}</v-card-text>

    <v-card-text class="tw-pl-0 ">
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          class="tw-mb-3"
        ></v-rating>
      </v-row>

      <div class="tw-text-left tw-truncate tw-w-9/12">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-0"></v-divider>

    <v-card-actions class="tw-pl-0">
      <v-btn
        dark
        color="#2c7083"
        elevation="4"
        @click="addToCart(book)"
      >
        ADD TO CART
      </v-btn>
    </v-card-actions>
  </div>

  <Notification ref="notification" text="Added to Cart" />
  </div>
</template>

<script>

import gsap from "gsap"
import Notification from '../components/Notification.vue';

export default {
  name: 'Products',
  props: {
    msg: String
  },

  components:{
    Notification
  },

  computed:{
     books(){
      return this.$store.getters.products;
    }
  },

  data:
   function() {
    return {

    }
  },

  methods: {
    addToCart(book){
      this.$store.dispatch('addToCart', {
        book: book
      });

      this.$refs.notification.open();
    }
  },

  mounted(){
    let tl = new gsap.timeline();
  }

}
</script>

<style scoped>

.title{
  font-family: 'Waterfall', cursive !important;
  font-size: 42px !important;
}

.price{
  font-family: 'Cabin', sans-serif !important;
  letter-spacing: 0.2px !important;
  font-weight: bold !important;
}
</style>
