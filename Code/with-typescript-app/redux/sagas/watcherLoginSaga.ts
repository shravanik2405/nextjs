import { takeLatest } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './loginSaga';

export enum AuthWatcherActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export function* watcherLoginSaga() {
  console.log('inside watcher saga');
  yield takeLatest(AuthWatcherActionType.LOGIN, loginSaga);
  yield takeLatest(AuthWatcherActionType.LOGOUT, logoutSaga);
}
