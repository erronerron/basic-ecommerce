import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import { updateCart } from '../../../store/features/cart/cartSlice'
import {
  upsertProduct,
  getProduct,
} from '../../../store/features/products/productSlice'
import style from './ProductForm.module.css'

function ProductForm() {
  const { products, product } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    long_description: '',
  })
  const [categories, setCategories] = useState([])
  const [image, setImage] = useState('')

  const checkBoxItems = ['Category1', 'Category2', 'Category3']
  const { name, price, description, long_description } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    if (id) {
      dispatch(getProduct(Number(id)))

      if (product) {
        const {
          name,
          price,
          description,
          long_description,
          image,
          categories,
        } = product

        setFormData({ name, price, description, long_description })
        setImage(image)
        setCategories(categories)
      }
    }
  }, [dispatch, id, product])

  const onSubmit = (e) => {
    e.preventDefault()

    const productData = {
      id: product?.id ?? products.length + 1,
      name,
      price,
      categories,
      description,
      long_description,
      image,
    }

    dispatch(upsertProduct(productData))

    if (!id) {
      setFormData({
        name: '',
        price: 0,
        categories: [],
        description: '',
        long_description: '',
      })
      setImage('')
      setCategories([])
      navigate(`/`)
    } else {
      dispatch(updateCart(productData))
      navigate(`/`)
    }
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  const onCheckboxChange = (e) => {
    if (e.currentTarget.checked) {
      setCategories([...categories, e.target.value])
    } else {
      const newArr = categories.filter((item) => item !== e.target.value)
      setCategories(newArr)
    }
  }

  return (
    <section className='container'>
      <form onSubmit={onSubmit}>
        <div className={style.wrapper}>
          <div className={style.productView}>
            <div className={style.image}>
              <img src={image} alt='Product' />
              <input
                data-testid='image-input'
                type='file'
                name='image'
                id='image'
                onChange={onImageChange}
              />
            </div>
            <div className='productDetails'>
              <div className={style.title}>
                <input
                  data-testid='name-input'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Product Name'
                  value={name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className={style.subtitle}>
                <input
                  data-testid='price-input'
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Price'
                  value={price}
                  onChange={onChange}
                  required
                />
              </div>
              <div className={style.checkboxes}>
                {checkBoxItems.map((item, index) => (
                  <div key={index}>
                    <input
                      data-testid={`${item}-checkbox`}
                      id={item}
                      name={item}
                      type={'checkbox'}
                      value={item}
                      onChange={onCheckboxChange}
                      checked={categories.includes(item)}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
              <div className={style.description}>
                <textarea
                  data-testid={`description-input`}
                  name='description'
                  id='description'
                  cols='50'
                  rows='4'
                  placeholder='Description'
                  value={description}
                  onChange={onChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <textarea
              data-testid={`long_description-input`}
              name='long_description'
              id='long_description'
              cols='30'
              rows='4'
              placeholder='Long Description'
              value={long_description}
              onChange={onChange}
              required
            ></textarea>
          </div>
          <Button type='submit' text='Save Product' />
        </div>
      </form>
    </section>
  )
}

export default ProductForm
