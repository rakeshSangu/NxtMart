import './index.css'

import {Component} from 'react'

import {BiHome, BiLogOut} from 'react-icons/bi'
import {BsCart} from 'react-icons/bs'

import Cookies from 'js-cookie'

import {Link, withRouter} from 'react-router-dom'

class MobileFooter extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {history} = this.props
    const {location} = history
    const {pathname} = location
    return (
      <div className="mobile-header-container">
        <Link to="/">
          <BiHome
            className={
              pathname === '/'
                ? 'mobile-header-icon active-footer-icon'
                : 'mobile-header-icon'
            }
          />
        </Link>
        <Link aria-label="cart" to="/cart">
          <BsCart
            className={
              pathname === '/cart'
                ? 'mobile-header-icon active-footer-icon'
                : 'mobile-header-icon'
            }
          />
        </Link>
        <button
          type="button"
          onClick={this.onClickLogout}
          className="home-logout-btn"
          aria-label="Logout"
        >
          <BiLogOut className="mobile-header-icon" />
        </button>
      </div>
    )
  }
}

export default withRouter(MobileFooter)
