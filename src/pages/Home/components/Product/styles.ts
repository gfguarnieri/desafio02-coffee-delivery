import styled from 'styled-components'

export const ProdutContainer = styled.div`
  width: 16rem;
  padding: 1.2rem;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  img {
    margin-top: -2.25rem;
  }
  .list-tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    min-height: 1.2rem;
  }
  .tag {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 1.3;
    text-transform: uppercase;
    border-radius: 12px;
    padding: 0.3rem 0.5rem;
  }
  .name {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }
  .description {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
  .price-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    height: 2.3rem;
    gap: 0.5rem;
    .currency {
      font-size: 0.875rem;
      padding-right: 0.2rem;
      color: ${(props) => props.theme['base-text']};
    }
    .value {
      font-size: 1.5rem;
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['base-text']};
      margin-right: 1rem;
    }

    > button {
      height: 100%;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};
      padding: 0.5rem;
      border: 0;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0;
    }
    > button:disabled {
      cursor: not-allowed;
    }

    > button:not(:disabled):hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`
