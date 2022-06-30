export const formatPrice = (amount = 0) => {
  const amountValue = Number(amount)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  }).format(amountValue)
}
