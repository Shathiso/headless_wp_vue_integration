<template>
  <div class="tw-w-full tw-h-16 tw-flex tw-align-middle tw-px-12 tw-justify-between" style="background-color:rgb(237 242 245); box-shadow: 0px 0px 1px rgb(44 112 131);">
    <router-link to="/" class="tw-mt-5">
      <v-icon color="rgb(44, 112, 131)" title="Home">mdi-home</v-icon>
    </router-link>

    <span class="tw-mt-5">
      <v-icon color="rgb(44, 112, 131)" class="tw-mx-4">mdi-magnify</v-icon>
      <v-menu
      open-on-hover
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon :color=" loggedIn ? 'pink' : 'rgb(44, 112, 131)'" 
          v-bind="attrs"
          v-on="on"
          :class="{'tw-text-sm': loggedIn}"
          class="tw-ml-4 tw-mr-8 ">
          {{ loggedIn ? `Hi ${username}` : 'mdi-account' }}
        </v-icon>
      </template>

      <v-list class="tw-text-left">
        <span
          class="tw-px-3 tw-py-1 tw-cursor-pointer"
          @click="loggedIn ? Logout(): Login()"
        >
        {{ loggedIn ? 'Logout':'Login' }}
        </span>
        <v-list-item class="tw-px-3 tw-text-left">
          <router-link to="/register">
            Register
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
      

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
    },

    loggedIn(){
      return this.$store.getters.loggedIn;
    },

     username(){
      return this.$store.getters.username;
    }
  },

  data () {
      return {
        
      }
  },

  methods: {
    showCart() {
      this.$emit('showCart');
    },

    Logout() {
      this.$store.dispatch('logout');
    },

    Login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>