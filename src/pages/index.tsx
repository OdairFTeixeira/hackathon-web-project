import React from 'react';
import theme from '../styles/themes/componentsThemes';
import { ThemeProvider } from '@material-ui/core';



const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>

  )
}

export default Home;
