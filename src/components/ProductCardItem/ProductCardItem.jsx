import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import Button from '../Button/Button'
import style from './ProductCardItem.module.css'

function ProductCardItem({ product, onClick }) {
  return (
    <div className={style.card}>
      <Link to={`/product/${product?.id}`}>
        <div className={style.image}>
          <img src={product?.image} alt={product?.name + ' image'} />
        </div>
      </Link>
      <div className={style.productDetails}>
        <div>
          <Link to={`/product/${product?.id}`}>
            <div className={style.title}>{product?.name}</div>
          </Link>
          <div className={style.subtitle}>{formatPrice(product?.price)}</div>
        </div>
        <Button onClick={onClick} text='Add to Cart' />
      </div>
    </div>
  )
}

export default ProductCardItem
