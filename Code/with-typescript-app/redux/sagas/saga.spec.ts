import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { loginAction, logoutAction } from '../action';
import { loginSaga } from './loginSaga';
import LoginRequest from '../../http/Login';

const email = 'saigita@test.com';
const password = 'testPassword';
const login = loginAction({ email, password });
const logout = logoutAction(() => {});

describe('login flow', () => {
  const generator = cloneableGenerator(loginSaga)(login);

  test('login call', () => {
    expect(generator.next().value).toEqual(
      call(LoginRequest.loginRequest, { email, password })
    );
  });
});
