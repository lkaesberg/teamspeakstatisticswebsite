import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "react-bootstrap";
import {theme} from "./CustomTheme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}><App /></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
