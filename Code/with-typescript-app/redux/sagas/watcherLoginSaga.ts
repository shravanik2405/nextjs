import { takeEvery } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './loginSaga';

export enum AuthWatcherActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export function* watcherLoginSaga() {
  console.log('inside watcher saga');
  yield takeEvery(AuthWatcherActionType.LOGIN, loginSaga);
  yield takeEvery(AuthWatcherActionType.LOGOUT, logoutSaga);
}
