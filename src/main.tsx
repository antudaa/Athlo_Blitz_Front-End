import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { Toaster } from 'react-hot-toast';
import AppContent from './AppContent.tsx';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Toaster />
      <AppContent />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
