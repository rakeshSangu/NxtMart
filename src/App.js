import './App.css'

import {Component} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import CartContext from './CartContext'

class App extends Component {
  state = {
    cartList: JSON.parse(localStorage.getItem('cartData')) || [],
  }

  addToCart = productDetails => {
    const {cartList} = this.state
    const {id} = productDetails
    const itemIndex = cartList.findIndex(each => each.id === id)
    let updatedCartList
    if (itemIndex === -1) {
      updatedCartList = [...cartList, {...productDetails, count: 1}]
    } else {
      updatedCartList = cartList.map(each => {
        if (each.id === id) {
          return {...each, count: each.count + 1}
        }
        return each
      })
    }
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    this.setState({
      cartList: updatedCartList,
    })
  }

  deleteFromCart = productDetails => {
    const {id} = productDetails
    const {cartList} = this.state
    const cartItem = cartList.find(eachItem => eachItem.id === id)
    const {count} = cartItem
    let updatedCartList
    if (count === 1) {
      updatedCartList = cartList.filter(each => each.id !== id)
    } else {
      updatedCartList = cartList.map(each => {
        if (each.id === id) {
          return {...each, count: each.count - 1}
        }
        return each
      })
    }
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    this.setState({
      cartList: updatedCartList,
    })
  }

  deleteCart = () => {
    localStorage.removeItem('cartData')
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          deleteFromCart: this.deleteFromCart,
          deleteCart: this.deleteCart,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
