import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import {
  loginAction,
  loginError,
  loginSuccess,
  logoutSuccess,
  logoutAction
} from '../action';
import { loginSaga, logoutSaga } from './loginSaga';
import LoginRequest from '../../http/login';

const email = 'saigita@test.com';
const password = 'testPassword';
const login = loginAction({ email, password }, () => {});
const logout = logoutAction(() => {});

const mockUser = {
  id: 2,
  first_name: 'Saigita',
  last_name: 'G',
  token: 'some_random_string',
  email: 'saigita@test.com'
};

describe('login flow', () => {
  const generator = cloneableGenerator(loginSaga)(login);

  test('login call', () => {
    expect(generator.next().value).toEqual(
      call(LoginRequest.loginRequest, { email, password })
    );
  });

  test('login success', () => {
    const clone = generator.clone();
    expect(clone.next(mockUser).value).toEqual(put(loginSuccess(mockUser)));
    expect(clone.next().done).toEqual(true);
  });

  test('login failed', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(put(loginError()));
    expect(clone.next().done).toEqual(true);
  });
});

describe('logout flow', () => {
  const generator = cloneableGenerator(logoutSaga)(logout);

  test('logout success', () => {
    const clone = generator.clone();
    expect(clone.next(true).value).toEqual(put(logoutSuccess()));
    expect(clone.next().done).toEqual(true);
  });
});
