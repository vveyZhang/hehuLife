import { createStore,applyMiddleware } from 'redux';
import AppReducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
let middleware=[thunk,promise];
export default function configureStore(initialState) {
  return createStore(AppReducers, initialState,applyMiddleware(...middleware));
}
