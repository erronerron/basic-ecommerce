import cartReducer, { addToCart, updateCart, resetCart } from './cartSlice'

describe('counter reducer', () => {
  const product = {
    name: 'Test',
    price: 100,
    description: 'test description',
    long_description: 'test long description',
    categories: ['Category1', 'Category2', 'Category3'],
    image: '',
    quantity: 1,
  }

  const product2 = {
    name: 'Test',
    price: 100,
    description: 'test description',
    long_description: 'test long description',
    categories: ['Category1', 'Category2', 'Category3'],
    image: '',
    quantity: 1,
  }

  const initialState = { cart: [], cartItems: 0, cartTotal: 0 }
  const filledState = { cart: [product], cartItems: 1, cartTotal: 100 }

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle addToCart if product already exists', () => {
    const actual = cartReducer(initialState, addToCart(product))
    expect(actual.cart).toEqual([product])
    expect(actual.cartItems).toEqual(1)
    expect(actual.cartTotal).toEqual(100)
  })

  it('should handle addToCart if product do not exist', () => {
    const actual = cartReducer(filledState, addToCart(product2))
    expect(actual.cart).toEqual([{ ...product, quantity: 2 }])
    expect(actual.cartItems).toEqual(2)
    expect(actual.cartTotal).toEqual(200)
  })

  it('should handle updateCart if product already exists', () => {
    const actual = cartReducer(filledState, updateCart(product))
    expect(actual.cart).toEqual([product])
    expect(actual.cartItems).toEqual(1)
    expect(actual.cartTotal).toEqual(100)
  })

  it('should handle updateCart if product do not exist', () => {
    const actual = cartReducer(filledState, updateCart(product2))
    expect(actual.cart).toEqual([product])
    expect(actual.cartItems).toEqual(1)
    expect(actual.cartTotal).toEqual(100)
  })

  it('should handle resetCart', () => {
    const actual = cartReducer(initialState, resetCart())
    expect(actual).toEqual(initialState)
  })
})
