<template>
  <div>
    <h1 class="tw-text-3xl">Login</h1>
    <form @submit.prevent="login()" class="tw-w-4/5 tw-mx-auto tw-max-w-sm tw-text-left  tw-bg-white tw-shadow-lg tw-rounded tw-px-8 tw-pt-6 tw-pb-8 tw-mb-4">
        <v-text-field v-model="form.username" :rules="rules" color="rgb(44, 112, 131)"  class=" tw-mb-6 tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 " id="username" type="text" placeholder="username">
        </v-text-field>

        <v-text-field v-model="form.password" :rules="rules" color="rgb(44, 112, 131)" class=" tw-mb-4 tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-mb-3 " id="password" type="password" placeholder="•••••••••••">
        </v-text-field>

        <hr/>
        <div class="tw-text-center tw-mb-6">
          <label class="tw-text-sm">Please <router-link class="" to="/register">Sign up</router-link> if you don't have an account.
          </label>
          
        </div>

      <div class="tw-flex tw-items-center tw-justify-between">
        <v-btn color="rgb(44, 112, 131)" 
          class=" tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline" 
          @click="loading = true"
          type="submit">
          <span v-if="!loading">Sign In </span>  
          <v-progress-circular
           indeterminate
           color="white"
           width="3"
           v-if="loading"
          ></v-progress-circular>
        </v-btn>
        <a color="rgb(44, 112, 131)" class="tw-inline-block tw-align-baseline tw-font-bold tw-text-sm tw-hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>

      <v-card-text v-if="error" class="tw-bg-red-100 tw-mt-3 tw-border tw-border-red-400 tw-text-red-700 tw-px-4 tw-py-3 tw-rounded tw-relative" role="alert">
        <span class="tw-block sm:tw-inline">Please check your username and password</span>
       </v-card-text>
    </form>
  </div>
</template>
<script>
export default {

  mounted(){
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 2000);
  },

  data(){
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],

      form: {
        username: '',
        password: ''
      },
      loading: false,
      error: false
    }
  },

  computed:{
    checkingOut() {
      return this.$store.getters.checkingOut;
    },

    loggedIn(){
      return this.$store.getters.loggedIn;
    }
  },

  watch: {
    loggedIn(newInput) {
      if(newInput && this.checkingOut){
        this.$router.push('/checkout');
      }else if(newInput && !this.checkingOut){
        this.$router.push('/');
      }
    }
  },

  methods: {
    async login() {
      await this.$store.dispatch('login', {
        username: this.form.username,
        password: this.form.password
      });

      

      if(!this.loggedIn){
        this.loading = false;
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 4000);
        
      }

    },
  }
}
</script>

<style scoped>

</style>