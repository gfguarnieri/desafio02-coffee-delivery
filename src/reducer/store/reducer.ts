import { ActionsStoreType } from './actions'
import { produce } from 'immer'

export enum PaymentMethodTypes {
  CREDIT_CARD = 'credit-card',
  DEBIT_CARD = 'debit-card',
  MONEY = 'money',
  NONE = 'none',
}

export interface Product {
  id: number
  name: string
  image: string
  description: string
  price: number
  tags: string[]
}

export interface CartProduct {
  id: string
  subTotal: number
  product: Product
  count: number
}

export interface Address {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

export interface PurchaseInformation {
  address: Address
  paymentMethod: PaymentMethodTypes
}

interface StoreState {
  products: Product[]
  cartProducts: CartProduct[]
  purchaseInformation: PurchaseInformation
}

export function storeReducer(state: StoreState, action: any) {
  switch (action.type) {
    case ActionsStoreType.ADD_ITEM_CART:
      return produce(state, (draft) => {
        const { product, count } = action.payload
        draft.cartProducts.push({
          product,
          count,
          subTotal: count * product.price,
          id: new Date().toISOString(),
        })
      })

    case ActionsStoreType.REMOVE_ITEM_CART:
      return produce(state, (draft) => {
        const idCartProduct = action.payload.id
        draft.cartProducts = draft.cartProducts.filter(
          (cartProduct) => cartProduct.id !== idCartProduct,
        )
      })

    case ActionsStoreType.UPDATE_ITEM_CART:
      return produce(state, (draft) => {
        const idCartProduct = action.payload.id
        const cartProduct = draft.cartProducts.find(
          (cartProduct) => cartProduct.id === idCartProduct,
        )
        if (cartProduct) {
          cartProduct.count = action.payload.count
          cartProduct.subTotal =
            action.payload.count * cartProduct.product.price
        }
      })

    case ActionsStoreType.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cartProducts = []
      })

    case ActionsStoreType.FINALIZE_PURCHASE:
      return produce(state, (draft) => {
        draft.purchaseInformation.address = action.payload.address
        draft.purchaseInformation.paymentMethod = action.payload.paymentMethod
      })

    default:
      return state
  }
}
