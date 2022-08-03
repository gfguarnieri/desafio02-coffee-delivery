import styled from 'styled-components'

const inputsName = ['cep', 'rua', 'numero', 'bairro', 'cidade', 'uf']

export const DeliveryAddressFormContainer = styled.div`
  margin-top: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.35rem;
  .description-content svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  .inputs {
    margin-top: 2rem;
    display: grid;
    grid-template-areas:
      'cep . .'
      'rua rua rua'
      'numero complemento complemento'
      'bairro cidade uf';
    grid-template-columns: minmax(0, 3fr) minmax(0, 4fr) minmax(0, 1fr);
    gap: 0.75rem;
    box-sizing: border-box;

    input {
      height: 2.6rem;
      padding-left: 0.75rem;
      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
      color: ${(props) => props.theme['base-text']};
      background-color: ${(props) => props.theme['base-input']};
      font-size: 0.875rem;
      :focus {
        border: 1px solid ${(props) => props.theme['yellow-dark']};
        outline: 0;
      }
    }

    input::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
    ${inputsName.map((input) => {
      return `input[name='${input}'] {grid-area: ${input};}`
    })};
    .complemento {
      grid-area: complemento;
      position: relative;
      input {
        width: 100%;
      }
      label {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate3d(-0.75rem, 100%, 0);
        color: ${(props) => props.theme['base-label']};
        font-style: italic;
        font-size: 0.75rem;
      }
    }
  }
`
