import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
import { Presentation } from './components/Presentation'
import { ProductComponent } from './components/Product'
import { HomeContainer } from './styles'

export function Home() {
  const { products } = useContext(StoreContext)
  return (
    <HomeContainer>
      <Presentation />
      <div className="products">
        <header>
          <h1>Nossos cafés</h1>
          {/* <div>
            <span>Tradicional</span>
            <span>Especial</span>
            <span>Com leite</span>
            <span>Alcoólico</span>
            <span>Gelado</span>
          </div> */}
        </header>
        <div className="list">
          {products.map((product) => (
            <ProductComponent key={product.id} {...product} />
          ))}
        </div>
      </div>
    </HomeContainer>
  )
}
