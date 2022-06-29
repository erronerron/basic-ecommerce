import React from 'react'
import { useSelector } from 'react-redux'
import ProductCardItem from '../../../components/ProductCardItem/ProductCardItem'
import style from './ProductsPage.module.css'

function ProductsPage() {
  const { products } = useSelector((state) => state.products)

  return (
    <div className='container'>
      <h1>Products</h1>
      {products && products.length ? (
        <div className={style.wrapper}>
          {products.map((product, index) => {
            return <ProductCardItem key={index} product={product} />
          })}
        </div>
      ) : (
        <div style={{ height: '100vh' }}>No available products.</div>
      )}
    </div>
  )
}

export default ProductsPage
