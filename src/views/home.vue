<template>
  <div class="tw-bg-gradient-to-r tw-from-gray-400 tw-via-gray-300 tw-to-gray-300  tw-min-h-screen tw-relative" id="home-wrapper">
    <div class="tw-w-full tw-min-h-screen tw-z-20 tw-absolute" style="background-color:rgb(237 242 245)" id="overlay-start">
      <Navbar @showCart="showCart" class="tw-fixed tw-z-20 tw-top-0" />

      <div class="tw-h-60 tw-mt-16 tw-px-12 tw-flex " id="image-container" >
        <h3 class="tw-text-8xl tw-mt-16 tw-ml-1/12 hero-text">Exclusive Books</h3>
      </div>

      <Products class="tw-relative" />
      <Cart ref="cart" />
      
      <footer class="tw-h-80 tw-mt-20" style="background:rgb(44 112 131)">

      </footer>
    </div>
  </div>
</template>

<script>
  import Products from '../components/Products.vue';
  import Navbar from '../components/Navbar.vue';
  import Cart from '../components/ShoppingCart.vue';
  import bookImg from "../assets/images/stack.png"
  import gsap from "gsap"

  export default {
    name: 'Home',
    components: {
      Products,
      Navbar, 
      Cart,
      Notification
    },

    data: () => ({
    }),

    methods:{
      showCart() {
        this.$refs.cart.activate();
      }
    },


    async mounted() {
      await this.$store.dispatch('fetchProducts');
      await this.$store.dispatch('fetchUsers');
      console.log(this.$store.getters.users);
    }
  }
</script>

<style scoped>

  #image-container{
    background: url('../assets/images/books.jpg') no-repeat;
    background-size:cover;
    background-position: right -5px center;
    border-bottom: 1px solid rgba(44, 112, 131, 0.3);
  }

  .hero-text{
    font-family: 'Waterfall', cursive !important;
  }
</style>
