import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  border-radius: 8px;
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.35rem;
  .description-content svg {
    color: ${(props) => props.theme.purple};
  }
  .methods {
    margin-top: 2rem;
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    .method {
      display: flex;
      border-radius: 8px;
      justify-content: flex-start;
      gap: 0.75rem;
      width: 11.2rem;
      align-items: center;
      padding: 1rem 0 1rem 1rem;
      background-color: ${(props) => props.theme['base-button']};
      text-transform: uppercase;
      font-size: 0.75rem;
      border: 1px solid transparent;
      cursor: pointer;
      svg {
        color: ${(props) => props.theme.purple};
      }
      :hover:not(.selected) {
        background-color: ${(props) => props.theme['base-hover']};
        border: 1px solid transparent;
      }
    }
    .selected {
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme['purple-dark']};
    }
  }
`
