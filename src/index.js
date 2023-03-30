import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { MantineProvider } from '@mantine/core';

import { ContextProvider } from "./contexts/ContextProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


