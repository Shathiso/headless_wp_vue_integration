export default{
  users: [],

  user:{
    loggedIn: false,
    token: '',
    name: '',
    email: '',
    username: '',
  },

  registeringUserDetails:{
    username: '',
    firstname: '',
    email: '',
    password: ''
  },

  admin:{
    token: ''
  },
  

  loading: false,
  products: [],
  selectedProductsCount: 0,
  selectedProducts: [],
  selectedProductsTotal: 0,
  checkingOut: false,

  previousUrl: ''

}