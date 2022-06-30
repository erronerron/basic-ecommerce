import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { renderWithProvider as render } from '../../../utils/rtlUtil'
import ViewProduct from './ViewProduct'

describe('ViewProduct Component', () => {
  const product = {
    id: 1,
    name: 'Test',
    price: 100,
    description: 'test description',
    long_description: 'test long description',
    categories: ['Category1', 'Category2', 'Category3'],
    image: '',
  }

  const initialProductsState = {
    products: [product],
    product: product,
  }

  const initialCartState = {
    cart: [{ ...product, quantity: 1 }],
    cartItems: 1,
    cartTotal: 100,
  }

  it('should render product view page', () => {
    render(
      <Router>
        <ViewProduct />
      </Router>
    )
  })

  it('should add product to cart', () => {
    render(
      <Router>
        <ViewProduct />
      </Router>,
      {
        preloadedState: {
          products: initialProductsState,
          cart: initialCartState,
        },
      }
    )

    const addToCartButton = screen.getByText('Add to Cart')
    expect(addToCartButton).toBeInTheDocument()
    fireEvent.click(addToCartButton)
  })
})
