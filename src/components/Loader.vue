<template>
  <div class="vld-parent">
    
  </div>
</template>

<script>


    export default {
      data() {
        return {
          isLoading: false,
          fullPage: true
        }
      },
      components: {

      },
      methods: {
        onCancel() {
          console.log('User cancelled the loader.')
        }
      }
    }
</script>