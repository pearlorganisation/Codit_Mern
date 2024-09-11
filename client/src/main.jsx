import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './features/store.js';
import persistStore from 'redux-persist/es/persistStore';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    

    </Provider>

 
  </React.StrictMode>,
)
