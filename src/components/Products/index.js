import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Header />
      <div className="products-bg-container">
        <img
          className="products-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </>
  )
}

export default Products
