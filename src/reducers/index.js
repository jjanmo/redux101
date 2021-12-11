import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import todoReducer from './todos';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};
