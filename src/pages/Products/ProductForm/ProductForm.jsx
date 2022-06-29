import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../../store/features/products/productSlice'
import style from './ProductForm.module.css'

function ProductForm() {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(
      addProduct({
        id: products.length + 1,
        name: e.target.name.value,
        price: e.target.price.value,
        categories: [],
        description: e.target.description.value,
        long_description: e.target.long_description.value,
        image: e.target.image.value,
      })
    )

    e.target.reset()
    alert('Added new product.')
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className={style.wrapper}>
          <div className={style.productView}>
            <div className={style.image}>
              <input type='file' name='image' id='image' />
              <img src='' alt='Product 1' />
            </div>
            <div className='productDetails'>
              <div className={style.title}>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Product Name'
                  required
                />
              </div>
              <div className={style.subtitle}>
                <input
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Price'
                  required
                />
              </div>
              <div className={style.subtitle2}>
                <input
                  type='checkbox'
                  name='category1'
                  id='category1'
                  value='Category1'
                />
                <label htmlFor='category1'>Category1</label>
              </div>
              <div className={style.description}>
                <textarea
                  name='description'
                  id='description'
                  cols='30'
                  rows='10'
                  placeholder='Description'
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <textarea
              name='long_description'
              id='long_description'
              cols='30'
              rows='10'
              placeholder='Long Description'
              required
            ></textarea>
          </div>
          <button type='submit'>Save Product</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
