import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/AppBar.jsx';

import createTheme from '@mui/material/styles/createTheme.js';
import ThemeProvider from '@mui/material/styles/ThemeProvider.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/dancing-script';


import './index.css'


const ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(171,226,112,0.67)',
    },
    secondary: {
      main: '#436877',
    },
    error: {
      main: '#d05f5f',
    },
    warning: {
      main: '#ce7934',
    },
  },
  typography: {
    fontFamily: 'Mooli, Arial, sans-serif',  // Tipografía por defecto

    h1: {
      fontFamily: 'Dancing script, Grey Qo, Arial, sans-serif',  // Títulos grandes
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Dancing script, Grey Qo, Arial, sans-serif',  // Subtítulos
      fontWeight: 700,

    },
    subtitle1: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Subtítulos menores
      fontWeight: 500,

    },
    button: {
      fontFamily: 'Grey Qo, Arial, sans-serif',  // Botones
      textTransform: 'none',

    },
    body1: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto regular

    },
    body2: {
      fontFamily: 'Mooli, Arial, sans-serif',  // Texto pequeño

    },
  },
};

const theme = createTheme(ThemeOptions)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme} >
        <ResponsiveAppBar />
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
)
