import userEvent from '@testing-library/user-event'
import { Routes, Route, MemoryRouter } from 'react-router-dom'
import { fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { renderWithProvider as render } from '../../../utils/rtlUtil'
import ProductForm from './ProductForm'
import ViewProduct from '../ViewProduct/ViewProduct'

describe('ProductForm Component', () => {
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

  it('should render product form', () => {
    render(
      <Router>
        <ProductForm />
      </Router>
    )
  })

  it('should add product', () => {
    render(
      <Router>
        <ProductForm />
      </Router>
    )

    const nameInput = screen.getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute('type', 'text')
    fireEvent.change(nameInput, { target: { value: 'test' } })

    const priceInput = screen.getByTestId('price-input')
    expect(priceInput).toBeInTheDocument()
    expect(priceInput).toHaveAttribute('type', 'number')

    const descriptionInput = screen.getByTestId('description-input')
    expect(descriptionInput).toBeInTheDocument()

    const longDescriptionInput = screen.getByTestId('long_description-input')
    expect(longDescriptionInput).toBeInTheDocument()

    const imageFileInput = screen.getByTestId('image-input')
    fireEvent.change(imageFileInput, { target: { value: '' } })

    userEvent.click(screen.getByTestId('Category1-checkbox'))
    userEvent.click(screen.getByTestId('Category1-checkbox'))

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
    expect(screen.getByText('Save Product')).toBeInTheDocument()
    fireEvent.submit(submitButton)
  })

  it('should update product', () => {
    render(
      <MemoryRouter initialEntries={['/product/1/edit']}>
        <Routes>
          <Route path='/product/:id' element={<ViewProduct />}></Route>
          <Route path='/product/:id/edit' element={<ProductForm />}></Route>
        </Routes>
      </MemoryRouter>,
      {
        preloadedState: {
          products: initialProductsState,
          cart: initialCartState,
        },
      }
    )

    const nameInput = screen.getByTestId('name-input')
    expect(nameInput).toBeInTheDocument()
    expect(nameInput).toHaveAttribute('type', 'text')
    fireEvent.change(nameInput, { target: { value: 'test' } })

    const priceInput = screen.getByTestId('price-input')
    expect(priceInput).toBeInTheDocument()
    expect(priceInput).toHaveAttribute('type', 'number')

    const descriptionInput = screen.getByTestId('description-input')
    expect(descriptionInput).toBeInTheDocument()

    const longDescriptionInput = screen.getByTestId('long_description-input')
    expect(longDescriptionInput).toBeInTheDocument()

    const imageFileInput = screen.getByTestId('image-input')
    fireEvent.change(imageFileInput, { target: { value: '' } })

    userEvent.click(screen.getByTestId('Category1-checkbox'))
    userEvent.click(screen.getByTestId('Category1-checkbox'))

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()
    expect(screen.getByText('Save Product')).toBeInTheDocument()
    fireEvent.submit(submitButton)
  })
})
