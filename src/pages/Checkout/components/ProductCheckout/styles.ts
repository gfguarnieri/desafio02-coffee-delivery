import styled from 'styled-components'

export const ProductCheckoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  .description {
    margin-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .name {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  > .description .count {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    height: calc();
  }
  .remove-product {
    display: flex;
    padding: 0.4rem 0.5rem;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: 0;
    border-radius: 6px;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    cursor: pointer;
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
  .subtotal {
    margin-left: auto;
    margin-bottom: auto;
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`
