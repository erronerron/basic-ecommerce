import React from 'react'
import style from './ViewProduct.module.css'

function ViewProduct() {
  return (
    <div className='container'>
      <div className={style.wrapper}>
        <div className={style.productView}>
          <div className={style.image}>
            <img src='' alt='Product 1' />
          </div>
          <div className='productDetails'>
            <div className={style.title}>Product Name</div>
            <div className={style.subtitle}>Product Price</div>
            <div className={style.subtitle2}>Category</div>
            <div className={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              fugit distinctio totam ex praesentium unde expedita pariatur sint
              molestias. Impedit, minima dolor nisi quibusdam consequuntur
              perferendis dolores. Voluptatum, natus non quod obcaecati ipsa,
              eligendi nisi illo nam optio totam quis consequatur itaque minima,
              beatae quia sapiente eius. Sint, labore ipsum?
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
        <div>Long Description</div>
      </div>
    </div>
  )
}

export default ViewProduct
