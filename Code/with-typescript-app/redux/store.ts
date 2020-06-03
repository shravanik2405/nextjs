import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sessionReducer from './reducers/session';
import logger from 'redux-logger';
import { mainSaga } from './sagas/mainSaga';

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
  sessionReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(mainSaga);
