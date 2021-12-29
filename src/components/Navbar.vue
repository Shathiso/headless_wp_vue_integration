<template>
  <div class="tw-w-full tw-h-16 tw-flex tw-align-middle tw-px-12 tw-justify-between" style="background-color:#eeeffe; box-shadow: 0px 0px 1px rgb(44 112 131);">
    <v-icon color="rgb(44, 112, 131)">mdi-home</v-icon>

    <span class="tw-mt-5">
      <v-icon color="rgb(44, 112, 131)" class="tw-mx-4">mdi-magnify</v-icon>
      <v-icon color="rgb(44, 112, 131)" class="tw-ml-4 tw-mr-8">mdi-account</v-icon>

      <v-btn
        fab
        color="pink"
        dark
        x-small
        elevation="1"
        class="tw-absolute tw-w-5 tw-h-5 tw--mt-4 tw-ml-4"
      > 
        {{ selectedProductsCount }}
      </v-btn>
      <v-icon color="rgb(44, 112, 131)" @click="showCart" title="Shopping Cart" class="tw-align-self-center">mdi-cart</v-icon>
       
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed:{
    selectedProductsCount(){
      return this.$store.getters.selectedProductsCount;
    }
  },

  data () {
      return {
        
      }
  },

  methods: {
    showCart() {
      this.$emit('showCart');
    }
  }
}
</script>

<style>

</style>