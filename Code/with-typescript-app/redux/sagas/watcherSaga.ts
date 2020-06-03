import { takeEvery } from 'redux-saga/effects';
import { loginSaga, logoutSaga } from './loginSaga';

export enum AuthWatcherActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export function* watcherLoginSaga() {
  yield takeEvery(AuthWatcherActionType.LOGIN, loginSaga);
  yield takeEvery(AuthWatcherActionType.LOGOUT, logoutSaga);
}
