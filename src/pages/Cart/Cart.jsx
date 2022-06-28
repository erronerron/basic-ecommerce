import React from 'react'
import jsonData from '../../products.json'
import style from './Cart.module.css'

function Cart() {
  const cartItems = jsonData.cartItems
  // const cartItems = []
  return (
    <div className='container'>
      <h1>Cart</h1>
      <div className={style.tableContainer}>
        {cartItems && cartItems.length ? (
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
                {cartItems.map((item, index) => {
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
                  <td>0</td>
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
