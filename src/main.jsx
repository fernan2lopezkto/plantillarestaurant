import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/AppBar.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline>
      <ResponsiveAppBar />
      <App />
    </CssBaseline>
  </React.StrictMode>,
)
