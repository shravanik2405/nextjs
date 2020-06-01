import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { loginRequest } from '../../http/Login';
import { saveUserAction, SessionActionType } from '../action';
import { LoginFormProps } from '../../pages/loginForm';

let loginPayload: LoginFormProps;

function* loginUser(action: SessionActionType.SAVE_USER) {
  try {
    const user = yield call(loginRequest(loginPayload, action));
  } catch (error) {
    console.error(error);
  }
}
