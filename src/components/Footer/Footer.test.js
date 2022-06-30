import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('should render a text in the footer', () => {
    render(<Footer text='Test Footer' />)
    expect(screen.getByText('Test Footer')).toBeInTheDocument()
  })
})
