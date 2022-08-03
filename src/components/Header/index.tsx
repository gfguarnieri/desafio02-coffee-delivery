import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { getTotalCountProductOnCart } = useContext(StoreContext)
  const countTotalCartItems = getTotalCountProductOnCart()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" className="logo" />
      </NavLink>

      <div className="right">
        <a href="#" className="city">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </a>
        <NavLink to="/checkout" className="cart">
          <ShoppingCart size={22} weight="fill" />
          {countTotalCartItems > 0 && <span>{countTotalCartItems}</span>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
