import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./services";

import reportWebVitals from "./reportWebVitals";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();