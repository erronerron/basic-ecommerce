import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import ProductCardItem from './ProductCardItem'

describe('Product Card Item Component', () => {
  it('should render a Product Card Item', () => {
    const product = {
      name: 'Test',
      price: 100,
      description: 'test description',
      long_description: 'test long description',
      categories: ['Category1', 'Category2', 'Category3'],
      image: '',
    }

    render(
      <Router>
        <ProductCardItem product={product} />
      </Router>
    )

    const displayedImage = screen.getByRole('img')
    expect(displayedImage.src).toContain('')
    expect(screen.getByAltText(product.name + ' image')).toBeInTheDocument()
    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText(formatPrice(product.price))).toBeInTheDocument()
    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })
})
