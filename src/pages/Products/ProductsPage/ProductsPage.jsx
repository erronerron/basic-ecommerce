import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../store/features/cart/cartSlice'
import ProductCardItem from '../../../components/ProductCardItem/ProductCardItem'
import style from './ProductsPage.module.css'

function ProductsPage() {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const addProductToCart = (productId) => {
    let product = products.filter((product) => product.id === productId)[0]

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    )
  }

  return (
    <div className='container'>
      <h1>Products</h1>
      {products && products.length ? (
        <div className={style.wrapper}>
          {products.map((product, index) => {
            return (
              <ProductCardItem
                key={index}
                product={product}
                onClick={() => addProductToCart(product.id)}
              />
            )
          })}
        </div>
      ) : (
        <div style={{ height: '100vh' }}>No available products.</div>
      )}
    </div>
  )
}

export default ProductsPage
