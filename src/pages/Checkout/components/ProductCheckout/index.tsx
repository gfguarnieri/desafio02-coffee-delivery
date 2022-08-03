import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Americano } from '../../../../assets/products'
import { InputAmountProducts } from '../../../../components/InputAmountProducts'
import { StoreContext } from '../../../../contexts/StoreContext'
import { CartProduct } from '../../../../reducer/store/reducer'
import { ProductCheckoutContainer } from './styles'

interface ProductCheckoutProps {
  productCart: CartProduct
}

export function ProductCheckout({ productCart }: ProductCheckoutProps) {
  const { removeItemCart, updateItemCart } = useContext(StoreContext)
  const { count, product, id, subTotal } = productCart
  const [internalCount, setInternalCount] = useState(count)

  function formatValue(value: number) {
    return value.toFixed(2).replace('.', ',')
  }

  function handleRemoveItem() {
    removeItemCart(id)
  }

  useEffect(() => {
    updateItemCart(id, internalCount)
  }, [updateItemCart, id, internalCount])

  return (
    <ProductCheckoutContainer>
      <img src={Americano} alt={product.name} />
      <div className="description">
        <span className="name">{product.name}</span>
        <div className="count">
          <InputAmountProducts
            count={internalCount}
            setCount={setInternalCount}
            min={1}
          />
          <button
            type="button"
            className="remove-product"
            onClick={handleRemoveItem}
          >
            <Trash size={16} />
            <span>Remover</span>
          </button>
        </div>
      </div>
      <span className="subtotal">R$ {formatValue(subTotal)}</span>
    </ProductCheckoutContainer>
  )
}
