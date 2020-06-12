import { LoginFormProps } from '../pages/loginForm';
import { AuthWatcherActionType } from './sagas/watcherLoginSaga';

export enum SessionActionType {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT'
}
export interface SessionAction {
  type: SessionActionType;
  user?: any;
}
export const loginAction = (loginPayload: LoginFormProps) => ({
  type: AuthWatcherActionType.LOGIN,
  loginPayload
});

// export const saveUserAction = (user: any) => ({
//   type: SessionActionType.SAVE_USER,
//   user
// });

// export const removeUserAction = () => ({
//   type: SessionActionType.REMOVE_USER
// });

export const loginSuccess = (user: any) => ({
  type: SessionActionType.LOGIN_SUCCESS,
  user
});

export const loginFailure = () => ({
  type: SessionActionType.LOGIN_FAILURE
});

export const logoutAction = (removeCookie: any) => ({
  type: SessionActionType.LOGOUT,
  removeCookie
});
