<template>
 <div >
   <h1 class="tw-text-3xl tw-mb-5">Checkout</h1>
   <div class="tw-mt-1 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2  tw-gap-6 tw-px-12">
     <div>
       <h2 class="tw-mb-12">Shipping Information</h2>
       <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>
    
            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="address"
                :rules="nameRules"
                label="Address"
                required
              ></v-text-field>
            </v-col>

             <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="city"
                :rules="nameRules"
                label="City"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="country"
                :rules="nameRules"
                label="Country"
                required
              ></v-text-field>
            </v-col>
            
            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="postalCode"
                :rules="nameRules"
                label="Zip Code"
                required
              ></v-text-field>
            </v-col>
            
            <v-col cols="12"><h2 class="tw-mb-4">Contact Information</h2></v-col>
            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="contact.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
              lg="6"
            >
              <v-text-field
                v-model="contact.number"
                :rules="nameRules"
                label="Number"
                required
              ></v-text-field>
            </v-col>

          </v-row>
        </v-container>
      </v-form>
     </div>



     <div>
       <h2 class="tw-mb-4">Order Summary</h2>
       <v-card elevation="4"  v-for="book in selectedProducts" :key="book.id" class="tw-text-left tw-relative tw-p-5">
          <div class="">
            <v-icon color="red" 
              title="Remove" 
              class="tw-absolute tw-right-11 tw-top-4"
              @click="removeFromCart(book)">
              mdi-delete
            </v-icon>

            <v-card width="40" elevation="5" class="tw-inline-block tw-text-left">
            <v-img
              height="70"
              width="50"
              elevation="4"
              :src="book.images[0].src"
              class="tw-border-0"
            ></v-img>
            </v-card>
            <div class=" tw-px-0 tw-relative tw-inline-block tw-ml-3" >
              <div class="title tw-mb-6">{{ book.name }}</div> 
              
              <div class="price tw-mt-2">
                {{ book.prices.currency_symbol }} 
                {{ book.prices.regular_price }}
              </div>
            </div>

            <div class="tw-mt-0 tw-absolute tw-right-3 tw-bottom-8 text-emphasis">
              <div class="tw-text-center">
                Qty
              </div>  

              <v-btn x-small color="#2c7083" 
                @click="removeItemFromCart(book)"
                :disabled=" book['quantity'] == 1" 
                class="tw-rounded-l-full tw-mr-1">
                <v-icon color="white" small>mdi-minus</v-icon>
              </v-btn>

                {{ book['quantity'] }}

              <v-btn x-small color="#2c7083"
                @click="addToCart(book)"
                class="tw-rounded-r-full tw-ml-1">
                <v-icon color="white" small>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        
        </v-card>
     </div>

     <v-btn elevation="3" color="primary">Continue To Payment Information</v-btn>
   </div>
 </div>
</template>

<script>
export default {
  name: 'checkout',

  data: function() {
    return {
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      valid: false,

      contact: {
        email: '',
        number: '',
      },

      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

    }
  },

  computed:{
    selectedProducts() {
      return this.$store.getters.selectedProducts;
    },
 
    selectedProductsCount() {
      return this.$store.getters.selectedProductsCount;
    },
 
    selectedProductsTotal() {
      return this.$store.getters.selectedProductsTotal;
    }
  },

  methods: {
    addToCart(book){
      this.$store.dispatch('addToCart', {
        book: book
      })
    },

    removeFromCart(book){
      this.$store.dispatch('removeFromCart', {
       book: book
      })
    },

    removeItemFromCart(book){
       this.$store.dispatch('removeItemFromCart', {
       book: book
      })
    }
  }
}
</script>

<style scoped>
  .title{
    font-family: 'Waterfall', cursive !important;
    font-size: 30px !important;
    font-weight: bold;
  }
</style>