import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from '../../components/Header'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <ToastContainer></ToastContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
