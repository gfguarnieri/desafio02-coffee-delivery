import styled from 'styled-components'

export const InputAmountProductsContainer = styled.div`
  padding: 0.35rem 0.1rem;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.25rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  button {
    background-color: transparent;
    border: 0;
    margin: 0rem 0.25rem;
    color: ${(props) => props.theme.purple};
    font-size: 0;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
    :disabled {
      visibility: hidden;
    }
  }

  span {
    font-size: 1rem;
  }
`
