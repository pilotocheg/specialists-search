import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

import App from './App.tsx';
import { store } from './store';
import { theme, GlobalStyle } from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
