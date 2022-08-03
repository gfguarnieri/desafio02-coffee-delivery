import { MapPinLine } from 'phosphor-react'
import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { DeliveryAddressFormContainer } from './styles'

export function DeliveryAddressForm() {
  const { register, setValue, setFocus } = useFormContext()

  async function handleKeyUpCep(event: React.ChangeEvent<HTMLInputElement>) {
    const cep = event.target.value
    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (!data.erro) {
        setValue('rua', data.logradouro)
        setValue('uf', data.uf)
        setValue('cidade', data.localidade)
        setValue('bairro', data?.bairro)
        setFocus('numero')
      }
    }
  }

  return (
    <DeliveryAddressFormContainer>
      <div className="description-content">
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </div>
      <div className="inputs">
        <input
          type="text"
          onKeyUp={handleKeyUpCep}
          placeholder="CEP"
          maxLength={9}
          {...register('cep')}
        />
        <input type="text" placeholder="Rua" {...register('rua')} />
        <input type="text" placeholder="Número" {...register('numero')} />
        <div className="complemento optional-input">
          <input
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
            id="complemento"
          />
          <label htmlFor="complemento">Opcional</label>
        </div>
        <input type="text" placeholder="Bairro" {...register('bairro')} />
        <input type="text" placeholder="Cidade" {...register('cidade')} />
        <input type="text" placeholder="UF" {...register('uf')} />
      </div>
    </DeliveryAddressFormContainer>
  )
}
