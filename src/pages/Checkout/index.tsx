import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { StoreContext } from '../../contexts/StoreContext'
import { Address, PaymentMethodTypes } from '../../reducer/store/reducer'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { ProductCheckout } from './components/ProductCheckout'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const {
    cartProducts,
    getTotalAmount,
    getTotalCountProductOnCart,
    finalizePurchase,
    purchaseInformation,
    clearCart,
  } = useContext(StoreContext)

  const [methodPaymentSelected, setMethodPaymentSelected] = useState('')

  const { address } = purchaseInformation

  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      cep: address.cep,
      rua: address.rua,
      numero: address.numero,
      complemento: address.complemento,
      bairro: address.bairro,
      cidade: address.cidade,
      uf: address.uf,
    },
  })
  const total = getTotalAmount()

  const { handleSubmit, reset, watch } = form

  const totalCountProduts = getTotalCountProductOnCart()

  const totalWithShipping = total + 3.5

  function showToast() {
    toast.success('Pedido efetuado', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function onSubmit(formData: Address) {
    console.log(formData.cep)
    finalizePurchase(formData, methodPaymentSelected as PaymentMethodTypes)
    reset()
    clearCart()
    showToast()
    navigate('/success')
  }

  function formatValue(value: number) {
    return value.toFixed(2).replace('.', ',')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CheckoutContainer>
        <div className="form-checkout">
          <span className="title">Complete seu pedido</span>
          <FormProvider {...form}>
            <DeliveryAddressForm />
          </FormProvider>
          <PaymentMethod
            methodPaymentSelected={methodPaymentSelected}
            setMethodPaymentSelected={setMethodPaymentSelected}
          />
        </div>
        <div className="items-checkout">
          <span className="title">Cafés selecionados</span>
          <div className="review-order">
            <div className="list-products">
              {cartProducts.map((cartProduct) => {
                return (
                  <ProductCheckout
                    productCart={cartProduct}
                    key={cartProduct.id}
                  />
                )
              })}
            </div>
            <div className="order-summary">
              <div className="items-total">
                <span className="description">Total de itens</span>
                <span className="amount">R$ {formatValue(total)}</span>
              </div>
              <div className="shipping-price">
                <span className="description">Entrega</span>
                <span className="amount">R$ 3,50</span>
              </div>
              <div className="order-total">
                <span className="description">Total</span>
                <span className="amount">
                  R$ {formatValue(totalWithShipping)}
                </span>
              </div>
              <button type="submit" disabled={!totalCountProduts}>
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </CheckoutContainer>
    </form>
  )
}
