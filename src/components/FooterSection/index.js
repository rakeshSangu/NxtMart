import './index.css'

import {FaFacebook, FaPinterest, FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa6'

const FooterSection = props => {
  const {isMobileView} = props

  return (
    <div
      className={
        isMobileView
          ? 'footer-container mobile-view'
          : 'footer-container desktop-view'
      }
    >
      <p className="footer-address">
        For any queries, contact +91-9876543210 <br />
        or mail us help@nxtmart.co.in
      </p>
      <div className="footer-icons-container">
        <a
          rel="noreferrer"
          aria-label="facebook"
          target="_blank"
          href="https://www.facebook.com/nxtwave.tech/"
          className="footer-anchor-ele"
        >
          <FaFacebook className="footer-icon" />
        </a>
        <a
          rel="noreferrer"
          aria-label="pintrest"
          href="https://in.pinterest.com/"
          target="_blank"
          className="footer-anchor-ele"
        >
          <FaPinterest className="footer-icon" />
        </a>
        <a
          rel="noreferrer"
          aria-label="twitter"
          target="_blank"
          href="https://x.com/nxtwave_tech"
          className="footer-anchor-ele"
        >
          <FaTwitter className="footer-icon" />
        </a>
        <a
          rel="noreferrer"
          aria-label="linkedin"
          href="https://www.linkedin.com/in/rakeshsangu/"
          target="_blank"
          className="footer-anchor-ele"
        >
          <FaLinkedinIn className="footer-icon" />
        </a>
      </div>
      <p className="footer-copyright-para">
        Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd
      </p>
    </div>
  )
}

export default FooterSection
