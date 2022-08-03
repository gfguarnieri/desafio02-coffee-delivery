import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodTypes } from '../../../../reducer/store/reducer'
import { PaymentMethodContainer } from './styles'

export const methodsType = [
  {
    op: PaymentMethodTypes.CREDIT_CARD,
    icon: <CreditCard size={16} />,
    name: 'Cartão de crédito',
  },
  {
    op: PaymentMethodTypes.DEBIT_CARD,
    icon: <Bank size={16} />,
    name: 'Cartão de Débito',
  },
  {
    op: PaymentMethodTypes.MONEY,
    icon: <Money size={16} />,
    name: 'Dinheiro',
  },
]

interface PaymentMethodProps {
  methodPaymentSelected: string
  setMethodPaymentSelected(value: string): void
}

export function PaymentMethod({
  methodPaymentSelected,
  setMethodPaymentSelected,
}: PaymentMethodProps) {
  function handleChangeMethodPayment(option: string) {
    setMethodPaymentSelected(option)
  }
  return (
    <PaymentMethodContainer>
      <div className="description-content">
        <CurrencyDollar size={22} />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="methods">
        {methodsType.map((method) => {
          return (
            <div
              className={`method  
              ${methodPaymentSelected === method.op && 'selected'}`}
              key={method.op}
              onClick={() => handleChangeMethodPayment(method.op)}
            >
              {method.icon}
              <span>{method.name}</span>
            </div>
          )
        })}
      </div>
    </PaymentMethodContainer>
  )
}
