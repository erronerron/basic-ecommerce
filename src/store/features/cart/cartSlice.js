import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartItems: 0,
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const elementIndex = state.cart.findIndex(
        (item) => item.id === product.id
      )

      if (elementIndex < 0) {
        state.cart = [...state.cart, product]
      } else {
        state.cart[elementIndex] = {
          ...product,
          quantity: state.cart[elementIndex].quantity + 1,
        }
      }

      state.cartItems = state.cart.reduce((acc, item) => {
        return (acc += item?.quantity)
      }, 0)

      state.cartTotal = state.cart.reduce((acc, item) => {
        return (acc += item?.quantity * item?.price)
      }, 0)
    },
    updateCart: (state, action) => {
      const product = action.payload
      
      state.cart = state.cart.map(item => {
        return {...item, ...product}
      })
      
      state.cartItems = state.cart.reduce((acc, item) => {
        return (acc += item?.quantity)
      }, 0)

      state.cartTotal = state.cart.reduce((acc, item) => {
        return (acc += item?.quantity * item?.price)
      }, 0)
    },
    resetCart: (state) => {
      state.cart = []
      state.cartItems = 0
      state.cartTotal = 0
    },
  },
})

export const { addToCart, resetCart, updateCart } = cartSlice.actions
export default cartSlice.reducer
