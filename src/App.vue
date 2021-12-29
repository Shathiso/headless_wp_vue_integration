
<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  data() {
    return {
      isLoading: false,
      fullPage: true
    }
  },

  created() {
   this.loading = true;
  },

  mounted() {
    this.loading = false;
  },

  methods: {
    onCancel() {
      this.loading = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
