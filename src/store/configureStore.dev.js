import { createStore, compose,applyMiddleware } from 'redux';
import todoReducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
let middleware=[thunk,promise,logger];
const enhancer = compose(
  applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore(initialState) {
  const store = createStore(todoReducers,initialState, enhancer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () =>
      store.replaceReducer(require('../reducers/reducers').default)
    );
  }

  return store;
}
