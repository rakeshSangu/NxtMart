import './index.css'

import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {CiLogout} from 'react-icons/ci'
import Cookies from 'js-cookie'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {location} = this.props
    const {pathname} = location
    return (
      <div className="header-section">
        <Link className="link-component" to="/">
          <img
            alt="website logo"
            className="header-logo"
            src="https://s3-alpha-sig.figma.com/img/6fad/2083/8855997d164dd88d885fad87bdfa3be6?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VNF5j5~VHY21mE-Yhl-8MBWtXtdy6AEXXxgDIslNKsMagrLmV1f7Zv6q5614FRMTN4pRtpLnUUxAJk65Z5g6U3SczZ2o-prFqnLELJ9pglaXnkPDAY1tO3nha01~d90P3boaZcD3gvhvAInJ5m4jgh-ZxDQ1~88udFCRa5qOXFugy1SIJ~Sx8Y2FP51DvvKwaJSDJvVnJgwiaSrPPnZHv~TaSD2GDEhZxoUwjGNXFyEgw6CrZtt2HPrTM82flT3r0FuR1xtkD2xecPkBY8UCRpXd3Z7fUOjn~cBHxYZpf2LH6rqWL94Y0-vxEc2cFwxfOXEd367trhB9KXjCjp~WtQ__"
          />
        </Link>
        <div className="header-links-container">
          <Link to="/" className="link-component">
            <p
              className={
                pathname === '/'
                  ? 'header-link-para active-header'
                  : 'header-link-para'
              }
            >
              Home
            </p>
          </Link>
          <Link to="/cart" className="link-component">
            <p
              className={
                pathname === '/cart'
                  ? 'header-link-para active-header'
                  : 'header-link-para'
              }
            >
              Cart
            </p>
          </Link>
          <div className="header-logout-container">
            <CiLogout className="header-logout-icon" />
            <button
              type="button"
              onClick={this.onClickLogout}
              className="header-logout-button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)
