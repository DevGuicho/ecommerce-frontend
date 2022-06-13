import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './routes/App'
import ProductState from './state/product/ProductState'
import './index.css'
import CartState from './state/cart/CartState'
import UserState from './state/user/UserState'
import OrderState from './state/order/OrderState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <ProductState>
        <CartState>
          <OrderState>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </OrderState>
        </CartState>
      </ProductState>
    </UserState>
  </React.StrictMode>
)
