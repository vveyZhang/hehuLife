import { createStore, compose,applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import todoReducers from '../reducers/reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

let middleware=[thunk,promise,logger];
const enhancer = compose(
  applyMiddleware(...middleware) ,
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(todoReducers, initialState, enhancer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/reducers', () =>
      store.replaceReducer(require('../reducers/reducers').default)
    );
  }

  return store;
}
