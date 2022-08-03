import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StoreContextProvider } from './contexts/StoreContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <StoreContextProvider>
            <Router />
          </StoreContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
