import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  deleteCart: () => {},
})

export default CartContext
