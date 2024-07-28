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
