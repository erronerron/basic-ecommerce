import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar Component', () => {
  it('should render a navbar', () => {
    const cartItems = 0

    render(
      <Router>
        <Navbar cartItems={cartItems} />
      </Router>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Add Product')).toBeInTheDocument()
    expect(screen.getByText(`Cart (${cartItems})`)).toBeInTheDocument()
  })
})
