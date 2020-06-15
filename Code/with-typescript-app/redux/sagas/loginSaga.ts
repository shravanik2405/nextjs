import { put, call } from 'redux-saga/effects';
import { AuthWatcherActionType } from './watcherLoginSaga';
import { LoginFormProps } from '../../pages/loginForm';
import LoginRequest from '../../http/login';
import { SessionActionType } from '../action';
import { USER_COOKIE_KEY } from '../constants';

export interface LoginSaga {
  type: AuthWatcherActionType;
  loginPayload: LoginFormProps;
  setCookie: any;
}

interface LogoutSaga {
  type: AuthWatcherActionType;
  removeCookie: any;
}

export function* loginSaga(loginSagaPayload: LoginSaga) {
  try {
    const { loginPayload, setCookie } = loginSagaPayload;
    const user = yield call(LoginRequest.loginRequest, {
      ...loginPayload
    });
    setCookie(USER_COOKIE_KEY, user);
    yield put({ type: SessionActionType.LOGIN_SUCCESS, user });
  } catch (error) {
    console.error(error);
    yield put({ type: SessionActionType.LOGIN_FAILURE });
  }
}

export function* logoutSaga(logoutSagaPayload: LogoutSaga) {
  const { removeCookie } = logoutSagaPayload;
  const user = removeCookie(USER_COOKIE_KEY);
  console.log('remove user', user);
  yield put({ type: SessionActionType.LOGOUT_SUCCESS });
}
