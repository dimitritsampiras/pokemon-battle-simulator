import React from 'react'
import ReactDOM from 'react-dom'
import Pages from './components/pages'
import GlobalStyle from './theme/styles'
import theme from './theme/theme'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    {/* Redux provider */}
    <Provider store={store}>
      {/* Global Styles */}
      <GlobalStyle/>
        {/* Theme provider */}
        <ThemeProvider theme={theme}>
          {/* Pages */}
          <Pages />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
