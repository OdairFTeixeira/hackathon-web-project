import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderComponents } from '@material-ui/core';

import GlobalStyle from '../styles/global';
import theme from '../styles/themes/theme';
import componentsTheme from '../styles/themes/componentsThemes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderComponents theme={componentsTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProviderComponents>
    </ThemeProvider>
  )
}

export default MyApp
