import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="success" element={<Success />}></Route>
        </Route>
      </Routes>
    </main>
  )
}
