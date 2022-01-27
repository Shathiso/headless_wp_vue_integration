<template>
  <v-app>
    <v-main>
      <Navbar @showCart="showCart" class="tw-fixed tw-z-20 tw-top-0" />
      <router-view  class="tw-mt-28"/>
      <Cart ref="cart" />
      <footer class="tw-h-80 tw-mt-20" style="background:rgb(44 112 131)">

      </footer>
    </v-main>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Cart from './components/ShoppingCart.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Cart
  },

  data() {
    return {
    }
  },

  methods: {
    showCart() {
      this.$refs.cart.activate();
    }
  }
}
</script>

<style>
  #app {
    font-family: Cabin;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
