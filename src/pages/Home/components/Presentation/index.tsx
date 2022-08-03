import { PresentationContainer } from './styles'
import coffeDeliveryImage from '../../../../assets/coffeeDelivery.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Presentation() {
  return (
    <PresentationContainer>
      <div className="content">
        <div className="description">
          <p className="title">
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="intro-items">
            <div className="item">
              <span className="icon">
                <ShoppingCart size={16} weight="fill" />
              </span>
              <span className="description-intro-item">
                Compra simples e segura
              </span>
            </div>
            <div className="item">
              <span className="icon">
                <Package weight="fill" size={16} />
              </span>
              <span className="description-intro-item">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="item">
              <span className="icon">
                <Timer weight="fill" size={16} />
              </span>
              <span className="description-intro-item">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="item">
              <span className="icon">
                <Coffee weight="fill" size={16} />
              </span>
              <span className="description-intro-item">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <img
          src={coffeDeliveryImage}
          alt="Copo de Café delicioso para qualquer hora do dia"
          className="side-image"
        />
      </div>
    </PresentationContainer>
  )
}
