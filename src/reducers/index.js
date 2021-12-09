import { createStore } from 'redux';
import todoReducer from './todos';

const store = createStore(todoReducer);

export default store;
