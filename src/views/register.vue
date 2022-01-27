<template>
  <div>
      <h1 class="tw-w-full tw-text-3xl tw-text-center">Register</h1>
    <div class="tw-shadow-lg tw-w-4/5 tw-mx-auto tw-rounded tw-px-8 tw-pt-6 tw-pb-8 tw-mb-4">
      <v-card flat class="tw-p-5">
        <v-snackbar
          v-if="snackbar"
          absolute
          top
          right
          color="success"
        >
          <span>Registration successful!</span>
          <v-icon dark>
            mdi-checkbox-marked-circle
          </v-icon>
        </v-snackbar>
        <v-form
          ref="form"
          @submit.prevent="submit"
        >
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form.firstname"
                  :rules="rules.nameRules"
                  color="primary"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form.lastname"
                  :rules="rules.nameRules"
                  color="primary"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="form.email"
                  :rules="rules.emailRules"
                  color="primary"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                 <v-text-field
                  v-model="form.password"
                  :rules="rules.nameRules"
                  color="primary"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn
              color="red"
              class="tw-text-white"
              @click="resetForm"
            >
              Reset
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="rgb(44, 112, 131)" 
              class=" tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline" 
              @click="loading = true"
              :disabled="!formIsFilled && !loading"
              type="submit">
              <span v-if="!loading">Register </span>  
              <v-progress-circular
               indeterminate
               color="white"
               width="3"
               v-if="loading"
              ></v-progress-circular>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form :{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        },

        snackbar: false,
        loading: false,

        rules: {
          nameRules: [
            v => !!v || 'This field is required',
           // v => v.length > 3 || 'Name must be more than 3 characters',
          ],
  
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
          ],
        }
      }
    },

    computed: {
      formIsFilled () {
        return (
          this.form.firstname &&
          this.form.lastname &&
          this.form.email &&
          this.form.password
        )
      },
    },

    methods: {
      resetForm () {
        this.$refs.form.reset()
      },
      submit () {

        this.$store.dispatch('loginAdmin', {
          form: this.form
        });
        this.snackbar = true;
        this.resetForm();

      },
    },
}
</script>

<style>

</style>