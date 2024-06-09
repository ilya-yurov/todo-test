import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import baseTheme from '@shared/styles/theme';
import GlobalStyles from '@shared/styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={baseTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
