<template>
  <div class="text-center">

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

export default {
  props: {
    text: String
  },

  data: () => ({
    snackbar: false,
    timeout: 3000,
  }),

  methods: {
    open(){
      this.snackbar = true;
    },

    close(){
      this.snackbar = false;
    }
  }
}
</script>
