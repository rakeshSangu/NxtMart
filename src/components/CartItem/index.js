import './index.css'

import CartContext from '../../CartContext'

const CartItem = props => {
  const {cartItemDetails} = props
  const {name, count, image, weight, price} = cartItemDetails
  return (
    <CartContext.Consumer>
      {value => {
        const {addToCart, deleteFromCart} = value
        return (
          <>
            <div className="cart-image-details-container">
              <img alt={name} className="cart-item-image" src={image} />
              <div className="cart-item-details-container">
                <p className="cart-item-name">{name}</p>
                <p className="cart-item-weight">{weight}</p>
                <p className="cart-item-price">{price}</p>
              </div>
            </div>
            <div className="add-to-cart-buttons-container">
              <button
                type="button"
                data-testid="decrement-quantity"
                onClick={() => deleteFromCart(cartItemDetails)}
                className="count-vary-button"
              >
                -
              </button>
              <p data-testid="item-quantity" className="count-para">
                {count}
              </p>
              <button
                data-testid="increment-quantity"
                type="button"
                onClick={() => addToCart(cartItemDetails)}
                className="count-vary-button"
              >
                +
              </button>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}
export default CartItem
