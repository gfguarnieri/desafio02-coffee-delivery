import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { InputAmountProductsContainer } from './styles'

interface InputAmountProductsProps {
  min?: number
  count?: number
  setCount(count: number): void
}

export function InputAmountProducts({
  count = 0,
  setCount,
  min = 0,
}: InputAmountProductsProps) {
  function handleClickIncrease() {
    setCount(count + 1)
  }

  function handleClickDecrease() {
    setCount(count - 1)
  }

  return (
    <InputAmountProductsContainer>
      <button
        type="button"
        onClick={handleClickDecrease}
        disabled={count === min}
      >
        <Minus size={14} />
      </button>
      <span className="count">{count}</span>
      <button type="button" onClick={handleClickIncrease}>
        <Plus size={14} />
      </button>
    </InputAmountProductsContainer>
  )
}
