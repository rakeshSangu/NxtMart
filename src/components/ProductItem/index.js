import './index.css'

import CartContext from '../../CartContext'

const ProductItem = props => (
  <CartContext.Consumer>
    {value => {
      const {cartList, addToCart, deleteFromCart} = value
      const {productDetails} = props
      const {id, name, weight, price, image} = productDetails
      let count
      const cartItem = cartList.find(each => each.id === id)
      if (cartItem === undefined) {
        count = 0
      } else {
        count = cartItem.count
      }

      const onDecrementProduct = () => {
        deleteFromCart(productDetails)
      }

      const onIncrementProduct = () => {
        addToCart(productDetails)
      }

      return (
        <>
          <img alt={name} className="product-item-image" src={image} />
          <p className="product-item-name">{name}</p>
          <p className="product-item-count">{weight}</p>
          <div className="price-add-cart-container">
            <p className="product-item-price">{price}</p>
            {count === 0 ? (
              <button
                type="button"
                data-testid="add-button"
                onClick={onIncrementProduct}
                className="add-button"
              >
                Add
              </button>
            ) : (
              <div className="add-to-cart-buttons-container">
                <button
                  type="button"
                  data-testid="decrement-count"
                  onClick={onDecrementProduct}
                  className="count-vary-button"
                >
                  -
                </button>
                <p data-testid="active-count" className="count-para">
                  {count}
                </p>
                <button
                  type="button"
                  data-testid="increment-count"
                  onClick={onIncrementProduct}
                  className="count-vary-button"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default ProductItem
