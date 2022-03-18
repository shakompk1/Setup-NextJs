import * as React from 'react'
import { AppProps } from 'next/app'

//redux-toolkit,redux saga
import { useStore, Provider } from 'react-redux'
import { wrapper, SagaStore } from 'store/createStore'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'theme/index'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = useStore()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store as SagaStore}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
