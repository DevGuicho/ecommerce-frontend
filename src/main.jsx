import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './routes/App'
import ProductState from './state/product/ProductState'
import './index.css'
import CartState from './state/cart/CartState'
import UserState from './state/user/UserState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <ProductState>
        <CartState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartState>
      </ProductState>
    </UserState>
  </React.StrictMode>
)
