import { createSlice } from '@reduxjs/toolkit'
import { parseJson } from '../../../utils/parseJson'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: parseJson(localStorage.getItem('products')) ?? [],
    product: null,
  },
  reducers: {
    upsertProduct: (state, action) => {
      const elementIndex = state.products.findIndex(
        (item) => item.id === action.payload?.id
      )

      if (elementIndex < 0) {
        state.products = [...state.products, action.payload]
      } else {
        state.products[elementIndex] = {
          ...action.payload,
        }
      }

      localStorage.setItem('products', JSON.stringify([...state.products]))
    },
    getProduct: (state, action) => {
      state.product = state.products.find(
        (product) => product.id === action.payload
      )
    },
  },
})

export const { upsertProduct, getProduct } = productSlice.actions
export default productSlice.reducer
