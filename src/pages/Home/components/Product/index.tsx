import { ShoppingCartSimple } from 'phosphor-react'
import { ProdutContainer } from './styles'
import { Product } from '../../../../reducer/store/reducer'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../../contexts/StoreContext'
import { InputAmountProducts } from '../../../../components/InputAmountProducts'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function ProductComponent({
  id,
  description,
  image,
  name,
  price,
  tags,
}: Product) {
  const [count, setCount] = useState(0)
  const { addItemCart } = useContext(StoreContext)
  const priceFixed = price.toFixed(2).replace('.', ',').toString()

  function showToast() {
    toast.success('Adicionado com sucesso', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function handleAddItem() {
    addItemCart(id, count)
    showToast()
    setCount(0)
  }

  return (
    <ProdutContainer>
      <img src={image} alt="Imagem do Expresso Tradicional" />
      <div className="list-tags">
        {tags.map((tag) => {
          return (
            <span className="tag" key={tag}>
              {tag}
            </span>
          )
        })}
      </div>
      <span className="name">{name}</span>
      <span className="description">{description}</span>
      <div className="price-area">
        <span className="price">
          <span className="currency">R$</span>
          <span className="value">{priceFixed}</span>
        </span>
        <InputAmountProducts count={count} setCount={setCount} />
        <button type="button" onClick={handleAddItem} disabled={!count}>
          <ShoppingCartSimple size={22} weight="fill" />
        </button>
      </div>
    </ProdutContainer>
  )
}
