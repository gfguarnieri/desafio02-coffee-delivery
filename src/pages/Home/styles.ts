import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  .products {
    max-width: ${(props) => props.theme['content-width']};
    width: 100%;
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      div {
        display: flex;
        gap: 0.5rem;
      }
      span {
        color: ${(props) => props.theme['yellow-dark']};
        font-weight: bold;
        padding: 0.5rem 0.75rem;
        text-transform: uppercase;
        border: 2px solid ${(props) => props.theme.yellow};
        border-radius: 16px;
        font-size: 0.625rem;
      }
    }
    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2rem;
    }
    .list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 3.5rem;
      justify-content: flex-start;
    }
  }

  @media (max-width: ${(props) => props.theme['content-width']}) {
    .products header {
      justify-content: center;
      gap: 1rem;
    }
    .products .list {
      justify-content: center;
    }
  }
`
