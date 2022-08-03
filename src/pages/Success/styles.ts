import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: ${(props) => props.theme['content-width']};
  margin: 5rem auto;
  > h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
  }
  > p {
    margin-top: 0.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
  .shipping-area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6.3rem;
    .shipping-info {
      margin-top: 2.5rem;
      flex: 1 1 32rem;

      border: 1px solid transparent;
      border-top-right-radius: 36px;
      border-top-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 36px;
      background-image: linear-gradient(white, white),
        radial-gradient(circle at top left, #dbac2c, #8047f8);
      background-origin: border-box;
      background-clip: content-box, border-box;
      .content {
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .item {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          .description {
            color: ${(props) => props.theme['base-text']};
            font-size: 1rem;
            p {
              line-height: 130%;
            }
          }
          .icon {
            font-size: 0;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            svg {
              color: ${(props) => props.theme.white};
            }
          }
        }
        .item:nth-of-type(1) .icon {
          background: ${(props) => props.theme.purple};
        }
        .item:nth-of-type(2) .icon {
          background: ${(props) => props.theme.yellow};
        }
        .item:nth-of-type(3) .icon {
          background: ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
  @media (max-width: ${(props) => props.theme['content-width']}) {
    .shipping-area {
      justify-content: center;
    }

    .shipping-area img {
      width: 100%;
    }
  }
`
