import { createStore,applyMiddleware } from 'redux';
import todoReducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
let middleware=[thunk,promise];
export default function configureStore(initialState) {
  return createStore(todoReducers, initialState,applyMiddleware(...middleware));
}
