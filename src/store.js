import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas';

const SAGA = createSagaMiddleware();
const REDUX_DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(SAGA), REDUX_DEV_TOOLS),
  );

  SAGA.run(watcherSaga);
  return store;
}
