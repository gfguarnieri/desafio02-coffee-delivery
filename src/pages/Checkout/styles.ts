import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: ${(props) => props.theme['content-width']};
  margin: 2.5rem auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 500px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  .title {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
  }

  .description-content {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    div {
      span {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: 1rem;
      }
      p {
        margin-top: 0.125rem;
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }

  .form-checkout {
    flex: 1 1 40rem;
  }

  .items-checkout {
    flex: 1 1 28rem;
  }

  .review-order {
    margin-top: 1rem;
    padding: 2.5rem;
    border-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    background-color: ${(props) => props.theme['base-card']};
    .list-products {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      > div::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        transform: translateY(1.5rem);
        background-color: ${(props) => props.theme['base-button']};
        width: 100%;
      }
    }
    .order-summary {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      > div {
        display: flex;
        justify-content: space-between;
      }
      .order-total {
        font-size: 1.25rem;
        font-weight: bold;
      }
      button {
        font-size: 0.875rem;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.75rem 0 0.75rem;
        border-radius: 6px;
        border: 0;
        background-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
        cursor: pointer;
        :disabled {
          background-color: ${(props) => props.theme['base-input']};
          color: ${(props) => props.theme['base-label']};
          cursor: not-allowed;
        }
      }
    }
  }
`
