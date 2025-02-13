import './index.css'

import {Component} from 'react'

import {IoMdArrowRoundBack} from 'react-icons/io'

import {FaRegCheckCircle} from 'react-icons/fa'

import MobileFooter from '../MobileFooter'
import Header from '../Header'
import CartContext from '../../CartContext'
import CartItem from '../CartItem'
import FooterSection from '../FooterSection'

class Cart extends Component {
  state = {
    isChecked: false,
  }

  onClickGoBack = () => {
    const {history} = this.props
    history.push('/')
  }

  checkOutTheOrder = deleteCart => {
    deleteCart()
    this.setState({
      isChecked: true,
    })
  }

  renderEmptyCartView = () => (
    <>
      <Header />
      <div className="cart-container">
        <div className="empty-cart-view">
          <img
            alt="empty cart"
            className="empty-cart-image"
            src="https://res.cloudinary.com/dx6rnpfqd/image/upload/v1739191049/Logo_pegx0l.png"
          />
          <h1 className="eampty-cart-para">Your cart is empty</h1>
        </div>
        <MobileFooter />
      </div>
      <FooterSection isMobileView={false} />
    </>
  )

  goToHomePage = () => {
    const {history} = this.props
    this.setState({
      isChecked: false,
    })
    history.push('/')
  }

  renderCheckOutView = () => (
    <>
      <Header />
      <div className="cart-container">
        <div className="checked-out-view">
          <FaRegCheckCircle className="check-out-icon" />
          <h1 className="check-out-view-heading">Payment Successful</h1>
          <p className="check-out-view-para">Thank you for ordering.</p>
          <p className="check-out-view-para">
            Your payment is successfully completed.
          </p>
          <button
            type="button"
            onClick={this.goToHomePage}
            className="return-to-home-button"
          >
            Return to Homepage
          </button>
        </div>
        <MobileFooter />
      </div>
      <FooterSection isMobileView={false} />
    </>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList, deleteCart} = value
          const {isChecked} = this.state
          let totalAmount = 0
          const {length} = cartList
          if (isChecked === true) {
            return this.renderCheckOutView()
          }
          if (length === 0) {
            return this.renderEmptyCartView()
          }
          cartList.forEach(each => {
            totalAmount += parseFloat(each.price.slice(1)) * each.count
          })

          return (
            <>
              <Header />
              <div className="cart-container">
                <div className="cart-heading-container">
                  <button
                    aria-label="Go Back"
                    type="button"
                    onClick={this.onClickGoBack}
                    className="cart-back-button"
                  >
                    <IoMdArrowRoundBack className="cart-back-icon" />
                  </button>
                  <h1 className="check-out-heading">Checkout</h1>
                </div>
                <div>
                  <h1 className="large-cart-heading">Items</h1>
                  <div className="cart-section">
                    <div className="count-cartlist-container">
                      <p className="cart-count-para">items ({length})</p>
                      <ul className="cart-list-container">
                        {cartList.map(each => (
                          <>
                            <li
                              data-testid="cartItem"
                              className="cart-item"
                              key={each.id}
                            >
                              <CartItem cartItemDetails={each} />
                            </li>
                            <hr className="cart-item-hr-ele" />
                          </>
                        ))}
                      </ul>
                    </div>
                    <div className="checkout-container">
                      <p
                        data-testid="total-price"
                        className="total-cart-amount-para"
                      >
                        Total ({length} items) : ₹ {totalAmount}
                      </p>
                      <button
                        type="button"
                        onClick={() => this.checkOutTheOrder(deleteCart)}
                        className="checkout-button"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
                <MobileFooter />
              </div>
              <FooterSection isMobileView={false} />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Cart
