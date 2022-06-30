import userEvent from '@testing-library/user-event'
import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { renderWithProvider as render } from '../../utils/rtlUtil'
import Cart from './Cart'

describe('ProductsPage Component', () => {
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

  it('should render cart page', () => {
    render(
      <Router>
        <Cart />
      </Router>
    )
  })

  it('should display cart items', () => {
    render(
      <Router>
        <Cart />
      </Router>,
      {
        preloadedState: {
          products: initialProductsState,
          cart: initialCartState,
        },
      }
    )
  })

  it('should clear cart items', () => {
    render(
      <Router>
        <Cart />
      </Router>,
      {
        preloadedState: {
          products: initialProductsState,
          cart: initialCartState,
        },
      }
    )

    const clearItemsButton = screen.getByText('Clear All Items')
    fireEvent.click(clearItemsButton)
  })

  it('should display label if there are no items in the cart', () => {
    render(
      <Router>
        <Cart />
      </Router>
    )

    expect(screen.getByText('No items in the cart.')).toBeInTheDocument()
  })
})
