import { createContext, ReactNode, useReducer } from 'react'
import { ActionsStoreType } from '../reducer/store/actions'

import {
  Address,
  CartProduct,
  PaymentMethodTypes,
  Product,
  PurchaseInformation,
  storeReducer,
} from '../reducer/store/reducer'
import { DefaultProductsList } from './DefaultProducts'

const emptyPurchase = {
  address: {
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  },
  paymentMethod: PaymentMethodTypes.NONE,
} as PurchaseInformation

interface StoreContextType {
  products: Product[]
  cartProducts: CartProduct[]
  purchaseInformation: PurchaseInformation
  updateItemCart(cartId: string, count: number): void
  removeItemCart(cartId: string): void
  getTotalCountProductOnCart(): number
  getTotalAmount(): number
  addItemCart(productId: number, count: number): void
  clearCart(): void
  finalizePurchase(address: Address, paymentMethod: PaymentMethodTypes): void
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: ReactNode
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
  const [storeState, dispatch] = useReducer(
    storeReducer,
    {
      products: [],
      cartProducts: [],
      purchaseInformation: emptyPurchase,
    },
    () => {
      return {
        cartProducts: [],
        products: DefaultProductsList,
        purchaseInformation: emptyPurchase,
      }
    },
  )
  const { cartProducts, products, purchaseInformation } = storeState

  function getTotalCountProductOnCart(): number {
    const totalCount = cartProducts.reduce((prev, current) => {
      return prev + current.count
    }, 0)
    return totalCount
  }

  function getTotalAmount(): number {
    const totalAmount = cartProducts.reduce((prev, current) => {
      const subTotal = prev + current.subTotal
      return subTotal
    }, 0)
    return totalAmount
  }

  function addItemCart(productId: number, count: number): void {
    const product = products.find((product) => product.id === productId)
    dispatch({
      type: ActionsStoreType.ADD_ITEM_CART,
      payload: {
        product,
        count,
      },
    })
  }

  function updateItemCart(cartId: string, count: number): void {
    dispatch({
      type: ActionsStoreType.UPDATE_ITEM_CART,
      payload: {
        id: cartId,
        count,
      },
    })
  }

  function removeItemCart(cartId: string) {
    dispatch({
      type: ActionsStoreType.REMOVE_ITEM_CART,
      payload: {
        id: cartId,
      },
    })
  }

  function finalizePurchase(
    address: Address,
    paymentMethod: PaymentMethodTypes,
  ) {
    dispatch({
      type: ActionsStoreType.FINALIZE_PURCHASE,
      payload: {
        address,
        paymentMethod,
      },
    })
  }

  function clearCart() {
    dispatch({
      type: ActionsStoreType.CLEAR_CART,
    })
  }

  return (
    <StoreContext.Provider
      value={{
        products,
        cartProducts,
        purchaseInformation,
        updateItemCart,
        removeItemCart,
        clearCart,
        addItemCart,
        getTotalAmount,
        getTotalCountProductOnCart,
        finalizePurchase,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
