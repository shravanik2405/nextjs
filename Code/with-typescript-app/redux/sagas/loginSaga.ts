import { put, call } from 'redux-saga/effects';
import { AuthWatcherActionType } from './watcherSaga';
import { LoginFormProps } from '../../pages/loginForm';
import { loginRequest } from '../../http/login';
import { SessionActionType } from '../action';

interface LoginSaga {
  type: AuthWatcherActionType;
  loginPayload: LoginFormProps;
}

export function* loginSaga(loginSagaPayload: LoginSaga) {
  try {
    const { loginPayload } = loginSagaPayload;
    const user = yield call(loginRequest, { ...loginPayload });
    yield put({ type: SessionActionType.SAVE_USER, user, setCookie });
  } catch (error) {
    console.error(error);
  }
}

export function* logoutSaga() {
  //API
  yield put({ type: 'LOGOUT' });
  console.log('Hello Sagas!');
}
