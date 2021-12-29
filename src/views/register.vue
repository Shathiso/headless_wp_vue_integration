<template>
  <div class="tw-flex tw-flex-row tw-flex-wrap tw-items-center tw-w-full tw-lg:flex-row tw-min-h-screen tw-mix-blend-multiply" id="register-wrapper">
    <div class="tw-w-full md:tw-h-6/6 lg:tw-w-3/6 tw-relative  tw-z-10 lg:tw-pl-20 sm:tw-pl-0.5">
      <h1 class=" tw-font-semibold tw-text-6xl tw-text-white tw-block tw-w-full tw-h-auto tw-text-shadow-md">Register</h1>
      <!--<span class="tw-text-white tw-font-light tw-text-3xl">and</span>-->
      <p class="tw-font-light tw-text-4xl tw-block tw-w-full tw-h-auto tw-text-shadow-md tw-ml-5 xs:tw-ml-0 tw-mt-2" style="color:#00b0a3"><span class="tw-font-medium">Start</span> your fitness journey..</p>
    </div>
    <div class="tw-w-full md:tw-w-5/12 md:tw-mr-auto  tw-shadow-xl tw-relative tw-z-10">
      <v-card flat class="tw-p-5">
        <v-snackbar
          v-model="snackbar"
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
                  :rules="rules.firstname"
                  color="orange"
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
                  :rules="rules.lastname"
                  color="orange"
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
                  :rules="rules.email"
                  color="orange"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <!--<label>Age</label>
                <v-slider
                  v-model="form.age"
                  :rules="rules.age"
                  color="orange"
                  hint="Be honest"
                  min="1"
                  max="100"
                  thumb-label
                ></v-slider>-->
                 <v-text-field
                  v-model="form.password"
                  :rules="rules.password"
                  color="orange"
                  type="password"
                  label="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="terms"
                  color="green"
                >
                  <template v-slot:label>
                    <div  class="tw-text-black">
                      Do you accept the
                      <a
                        href="#"
                        @click.prevent="terms = false"
                      >terms</a>
                      and
                      <a
                        href="#"
                        @click.prevent="conditions = false"
                      >conditions?</a>
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn
              text
              @click="resetForm"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!formIsFilled"
              text
              type="submit"
              color="primary"
              class="tw-bg-yellow-600 tw-text-white"
              :class="{'tw-animate-pulse' : formIsFilled }"
            >
              Register
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
      const defaultForm = Object.freeze({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      })

      return {

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
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {

        this.$store.dispatch('registerUser', {
          email: this.form.email,
          password: this.form.password
        })
        this.snackbar = true
        this.resetForm()
  
      },
    },
}
</script>

<style>

</style>