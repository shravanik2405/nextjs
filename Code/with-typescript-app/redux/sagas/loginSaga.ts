import { put, call } from 'redux-saga/effects';
import { AuthWatcherActionType } from './watcherLoginSaga';
import { LoginFormProps } from '../../pages/loginForm';
import LoginRequest from '../../http/login';
import { SessionActionType } from '../action';

export interface LoginSaga {
  type: AuthWatcherActionType;
  loginPayload: LoginFormProps;
}

export function* loginSaga(loginSagaPayload: LoginSaga) {
  try {
    const { loginPayload } = loginSagaPayload;
    const user = yield call(LoginRequest.loginRequest, {
      ...loginPayload
    });
    console.log('inside login saga', user);
    yield put({ type: SessionActionType.LOGIN_SUCCESS, user });
  } catch (error) {
    console.error(error);
    yield put({ type: SessionActionType.LOGIN_FAILURE });
  }
}

export function* logoutSaga() {
  //API
  yield put({ type: 'LOGOUT' });
  console.log('Hello Sagas!');
}
