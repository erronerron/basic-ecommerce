import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  it('should render a button with a text', () => {
    render(<Button text='Test Button' />)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })
})
