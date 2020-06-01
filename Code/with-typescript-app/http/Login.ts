import axios from 'axios';
import { apiBaseUrl } from '../shared/axiosBaseConfig';
import { LoginFormProps } from '../pages/loginForm';

export const loginRequest = (loginPayload: LoginFormProps) => {
  return axios
    .post(apiBaseUrl + '/api/v1/users/login/', loginPayload)
    .then(value => value.data);
};
