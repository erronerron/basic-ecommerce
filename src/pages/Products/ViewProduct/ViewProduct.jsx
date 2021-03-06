import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import { addToCart } from '../../../store/features/cart/cartSlice'
import { getProduct } from '../../../store/features/products/productSlice'
import { formatPrice } from '../../../utils/formatPrice'
import style from './ViewProduct.module.css'

function ViewProduct() {
  const { products, product } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProduct(Number(id)))
  }, [dispatch, product, id])

  const addProductToCart = () => {
    let productData = products.filter((item) => item.id === product?.id)[0]

    dispatch(
      addToCart({
        ...productData,
        quantity: 1,
      })
    )
  }

  return (
    <div className='container'>
      <div className={style.wrapper}>
        <div className={style.productView}>
          <div className={style.image}>
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className='productDetails'>
            <div className={style.title}>{product?.name}</div>
            <div className={style.subtitle}>{formatPrice(product?.price)}</div>
            <div className={style.subtitle2}>
              {product?.categories.join(',')}
            </div>
            <div className={style.description}>{product?.description}</div>
            <Link to={`/product/${product?.id}/edit`}>
              <Button text='Edit' />
            </Link>
            <Button
              onClick={() => addProductToCart(product?.id)}
              text='Add to Cart'
            />
          </div>
        </div>
        <div>{product?.long_description}</div>
      </div>
    </div>
  )
}

export default ViewProduct
