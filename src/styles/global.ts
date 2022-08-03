import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        transition: color 200ms, background-color 200ms, all 200ms;
    }

    form{
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme.background};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    @media (max-width: 1120px) {
        body{
            padding: 1rem;
        }
    }
`
