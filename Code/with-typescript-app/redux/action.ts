import { LoginFormProps } from '../pages/loginForm';
import { AuthWatcherActionType } from './sagas/watcherLoginSaga';

export enum SessionActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
}
export interface SessionAction {
  type: SessionActionType | AuthWatcherActionType;
  user?: any;
}
export const loginAction = (loginPayload: LoginFormProps, setCookie: any) => ({
  type: AuthWatcherActionType.LOGIN,
  loginPayload,
  setCookie
});

export const loginSuccess = (user: any) => ({
  type: SessionActionType.LOGIN_SUCCESS,
  user
});

export const loginError = () => ({
  type: SessionActionType.LOGIN_FAILURE
});

export const logoutAction = (removeCookie: any) => ({
  type: AuthWatcherActionType.LOGOUT,
  removeCookie
});

export const logoutSuccess = () => ({
  type: SessionActionType.LOGOUT_SUCCESS
});
