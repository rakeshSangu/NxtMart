import {Redirect} from 'react-router-dom'

import {FaRegUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'

import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    if (usernameInput.length > 0 && passwordInput.length > 0) {
      const userDetails = {
        username: usernameInput,
        password: passwordInput,
      }
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }

      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        const {history} = this.props
        const jToken = data.jwt_token

        Cookies.set('jwt_token', jToken, {expires: 30})
        history.replace('/')
      } else {
        const errorMsg = data.error_msg
        this.setState({
          usernameInput: '',
          passwordInput: '',
          showPassword: false,
          errorMsg,
        })
      }
    }
  }

  render() {
    const {usernameInput, passwordInput, showPassword, errorMsg} = this.state
    const enteredDetails = usernameInput.length > 0 && passwordInput.length > 0
    const jwtoken = Cookies.get('jwt_token')
    if (jwtoken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-background">
        <div className="login-box">
          <img
            alt="login website logo"
            className="login-logo-image"
            src="https://s3-alpha-sig.figma.com/img/6fad/2083/8855997d164dd88d885fad87bdfa3be6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fePMdLFI1zqrq8RJz5~zJXzYdrhUGkqDlYyXisUIYqL48N5nKon~o18CiKr55gdl06kwgXweIklyl5Br-zhPY6NnxXBYjQOvKE7BBexbwlyzOsAy-W1vRNoGh50FmsdIEsnloIyKiBuxXV0dw5NBiPf3mMVMC8VcvunifeMAOG0JOr4BMnr03EF9n79NBbqgDGtiEL8ZooYEZt40k5J~ousd7VrMLzJo94Iab4qjpyOh8Pj00iuLQC2UYqCVPG2leOH1eAJg9joVXGM96pZkmqaU5bSpD-nlvz5JaOtrH3udiGhbWtDC0q1ivo9xZmrCp-H4ekRDVnp3jrVtJSs6Tg__"
          />
          <form onSubmit={this.onClickLogin} className="form-container">
            <div className="login-input-container">
              <label className="login-label" htmlFor="username">
                Username
              </label>
              <div className="input-box">
                <FaRegUserCircle className="login-icon" />
                <input
                  onChange={this.onChangeUsername}
                  value={usernameInput}
                  type="text"
                  id="username"
                  className="login-input-element"
                  placeholder="rahul"
                />
              </div>
            </div>
            <div className="login-input-container">
              <label className="login-label" htmlFor="current-password">
                Password
              </label>
              <div className="input-box">
                <RiLockPasswordFill className="login-icon" />
                <input
                  onChange={this.onChangePassword}
                  value={passwordInput}
                  type={showPassword ? 'text' : 'password'}
                  id="current-password"
                  className="login-input-element"
                  placeholder="rahul@2021"
                />
              </div>
            </div>
            <div className="checkbox-container">
              <input
                id="login-checkbox"
                className="login-checkbox"
                type="checkbox"
                onChange={this.onChangeShowPassword}
                checked={showPassword}
              />
              <label htmlFor="login-checkbox" className="login-label">
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className={
                enteredDetails
                  ? 'login-button'
                  : 'login-button no-details-button'
              }
            >
              Login
            </button>
            <p className="error-para">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
