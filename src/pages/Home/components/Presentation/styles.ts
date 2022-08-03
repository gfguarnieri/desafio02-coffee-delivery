import styled from 'styled-components'
import backgroundImage from '../../../../assets/background.png'
export const PresentationContainer = styled.div`
  background: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  flex-wrap: flex;
  width: 100%;
  .content {
    margin: auto;
    max-width: ${(props) => props.theme['content-width']};
    margin-top: 5.875rem;
    margin-bottom: 6.75rem;
    display: flex;
    flex-wrap: wrap;
    .description {
      width: 35.5rem;
      .title {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 1.3;
      }
      .subtitle {
        margin-top: 1rem;
        font-size: 1.25rem;
      }
      .intro-items {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.8rem;

          .description-intro-item {
            font-size: 0.875rem;
          }
          .icon {
            font-size: 0;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              color: ${(props) => props.theme.white};
            }
          }
        }
        .item:nth-child(1) .icon {
          background: ${(props) => props.theme['yellow-dark']};
        }
        .item:nth-child(2) .icon {
          background: ${(props) => props.theme['base-text']};
        }
        .item:nth-child(3) .icon {
          background: ${(props) => props.theme.yellow};
        }
        .item:nth-child(4) .icon {
          background: ${(props) => props.theme.purple};
        }
      }
    }
    img {
      margin-left: 3.5rem;
    }
  }

  @media (max-width: ${(props) => props.theme['content-width']}) {
    background: none;
    .content {
      margin: 0;
      justify-content: center;
      align-items: center;
      text-align: center;
      .description .intro-items {
        grid-template-columns: 1fr;
      }
      .side-image {
        margin: 0;
        padding-top: 2rem;
        width: 50%;
      }
    }
  }
`
