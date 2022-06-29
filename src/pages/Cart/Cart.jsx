import React from 'react'
import { useSelector } from 'react-redux'
import style from './Cart.module.css'

function Cart() {
  const { cart, cartTotal } = useSelector((state) => state.cart)

  return (
    <div className='container'>
      <h1>Cart</h1>
      <div className={style.tableContainer}>
        {cart && cart.length ? (
          <div className={style.wrapper}>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {Number(item.quantity ?? 0) * Number(item.price ?? 0)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}></td>
                  <td>Total</td>
                  <td>{cartTotal || 0}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <div>No items in the cart.</div>
        )}
      </div>
    </div>
  )
}

export default Cart
