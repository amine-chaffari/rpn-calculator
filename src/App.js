import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Navigation from './Navigation';
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
