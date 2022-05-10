import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from '../components/Cart'

import Menu from '../components/Menu'
import Portal from '../components/Portal'
import ShopLayout from '../components/ShopLayout'
import AccountPage from '../pages/AccountPage'
import CreateNewPassPage from '../pages/CreateNewPassPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import OrderDetailPage from '../pages/OrderDetailPage'
import OrdersPage from '../pages/OrdersPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import RecoveryPage from '../pages/RecoveryPage'
import RecoveryPageInstructions from '../pages/RecoveryPageInstructions'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/login' element={<LoginPage />} />

          <Route path='/auth/recovery-pass' element={<RecoveryPage />} />
          <Route
            path='/auth/recovery-instructions'
            element={<RecoveryPageInstructions />}
          />
          <Route
            path='/auth/recovery-pass/:token'
            element={<CreateNewPassPage />}
          />
          <Route path='shop' element={<ShopLayout />}>
            <Route index element={<HomePage />} />
            <Route path='product/:id' element={<ProductDetailPage />} />
          </Route>
          <Route path='account' element={<ShopLayout />}>
            <Route index element={<AccountPage />} />
            <Route path='create' element={<AccountPage isCreate />} />
          </Route>
          <Route path='orders' element={<ShopLayout />}>
            <Route index element={<OrdersPage />} />
            <Route path=':id' element={<OrderDetailPage />} />
          </Route>
          <Route
            path='/menu'
            element={
              <Portal>
                <Menu />
              </Portal>
            }
          />
          <Route
            path='/cart'
            element={
              <Portal>
                <Cart />
              </Portal>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
