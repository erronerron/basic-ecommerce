import productReducer, { upsertProduct, getProduct } from './productSlice'

describe('Product reducer', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 100,
    description: 'test description',
    long_description: 'test long description',
    categories: ['Category1', 'Category2', 'Category3'],
    image: '',
  }

  const initialState = {
    products: [],
    product: null,
  }

  const filledState = {
    products: [product],
    product: null,
  }

  it('should handle initial state', () => {
    expect(productReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle upsertProduct if product do not exist', () => {
    const actual = productReducer(initialState, upsertProduct(product))
    expect(actual.products).toEqual([product])
    expect(actual.product).toEqual(null)
  })

  it('should handle addToCart if product already exists', () => {
    const actual = productReducer(
      filledState,
      upsertProduct({ ...product, price: 200 })
    )
    expect(actual.products).toEqual([{ ...product, price: 200 }])
    expect(actual.product).toEqual(null)
  })

  it('should handle getProduct', () => {
    const actual = productReducer(filledState, getProduct(1))
    expect(actual.products).toEqual([product])
    expect(actual.product).toEqual(product)
  })
})
