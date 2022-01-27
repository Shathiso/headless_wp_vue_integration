<template>
  <div class=" tw-min-h-screen tw-relative tw--mt-4">

      <div class="tw-h-60 tw-mt-16 tw-px-12 tw-flex " id="image-container" >
        <h3 class="tw-text-8xl tw-mt-16 tw-ml-1/12 hero-text">Exclusive Books</h3>
      </div>

      <Products class="tw-relative" />
  </div>
</template>

<script>
  import Products from '../components/Products.vue';
  import Cart from '../components/ShoppingCart.vue';
  import gsap from "gsap"

  export default {
    name: 'Home',
    components: {
      Products,
      Cart,
      Notification
    },

    data: () => ({
    }),
    computed: {
      token(){
        return this.$store.getters.token;
      }
    },

    methods:{
      showCart() {
        this.$refs.cart.activate();
      }
    },

    mounted() {
       //console.log(process.env.VUE_APP_ADMIN_USERNAME + ' ' + process.env.VUE_APP_ADMIN_PASSWORD);
    },

    async created() {
      await this.$store.dispatch('fetchProducts');
      //await this.$store.dispatch('fetchUsers');
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
