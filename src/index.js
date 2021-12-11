import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyles from './globalStyles';
import create from './reducers';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = create();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
