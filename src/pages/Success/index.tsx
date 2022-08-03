import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'
import { SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import shippingImg from '../../assets/shipping.svg'
import { methodsType } from '../Checkout/components/PaymentMethod'
import { PaymentMethodTypes } from '../../reducer/store/reducer'

export function Success() {
  const { purchaseInformation, clearCart } = useContext(StoreContext)

  const { address, paymentMethod } = purchaseInformation

  function getPaymentMethodName(
    typePayment: PaymentMethodTypes,
  ): string | undefined {
    return methodsType.find((method) => method.op === typePayment)?.name
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div className="shipping-area">
        <div className="shipping-info">
          <div className="content">
            <div className="item">
              <span className="icon">
                <MapPin weight="fill" size={16} />
              </span>
              <div className="description">
                <p>
                  Entrega em{' '}
                  <strong>
                    {address.rua}, {address.numero}
                  </strong>
                </p>
                <p>
                  {address.bairro} - {address.cidade}, {address.uf}
                </p>
              </div>
            </div>
            <div className="item">
              <span className="icon">
                <Timer weight="fill" size={16} />
              </span>
              <div className="description">
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>
            <div className="item">
              <span className="icon">
                <CurrencyDollar weight="fill" size={16} />
              </span>
              <div className="description">
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{getPaymentMethodName(paymentMethod)}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={shippingImg} alt="Envio de Pedido" />
      </div>
    </SuccessContainer>
  )
}
