import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: ${(props) => props.theme['content-width']};
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  padding: 2rem 0;
  .logo {
    width: 5.25rem;
  }
  .right {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    .city {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.4rem;
      width: 9.7rem;
      background-color: ${(props) => props.theme['purple-light']};
      text-decoration: none;
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 8px;
      gap: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.3;
      svg {
        color: ${(props) => props.theme.purple};
      }
    }
    .cart {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      width: 2.4rem;
      height: 2.4rem;
      background-color: ${(props) => props.theme['yellow-light']};
      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
      span {
        position: absolute;
        right: 0;
        top: 0;
        width: 1.25rem;
        height: 1.25rem;
        background-color: ${(props) => props.theme['yellow-dark']};
        border-radius: 50%;
        transform: translate(50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 0.75rem;
        color: ${(props) => props.theme.white};
      }
    }
  }
`
