import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: JSON.parse(localStorage.getItem('products')) ?? [],
    product: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]
      localStorage.setItem('products', JSON.stringify([...state.products]))
    },
    getProduct: (state, action) => {
      state.product = state.products.find(
        (product) => product.id === action.payload
      )
    },
  },
})

export const { addProduct, getProduct } = productSlice.actions
export default productSlice.reducer
