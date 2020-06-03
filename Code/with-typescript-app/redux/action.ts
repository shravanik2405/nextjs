import { LoginFormProps } from '../pages/loginForm';
import { AuthWatcherActionType } from './sagas/watcherSaga';

export enum SessionActionType {
  SAVE_USER = 'SAVE_USER',
  REMOVE_USER = 'REMOVE_USER'
}
export interface SessionAction {
  type: SessionActionType;
  user?: any;
}
export const loginAction = (loginPayload: LoginFormProps) => ({
  type: AuthWatcherActionType.LOGIN,
  loginPayload
});

export const saveUserAction = (user: any) => ({
  type: SessionActionType.SAVE_USER,
  user
});

export const removeUserAction = () => ({
  type: SessionActionType.REMOVE_USER
});
