import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Header />
      <div className="cart-bg-container">
        <img
          className="cart-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Cart
