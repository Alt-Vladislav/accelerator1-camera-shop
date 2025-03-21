import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
