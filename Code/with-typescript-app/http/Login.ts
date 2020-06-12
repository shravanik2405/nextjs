import axios from 'axios';
import { apiBaseUrl } from '../shared/axiosBaseConfig';
import { LoginFormProps } from '../pages/loginForm';

type LoginRequestType = (loginPayload: LoginFormProps) => Promise<any>;

export interface ILoginRequest {
  loginRequest: LoginRequestType;
}

// export const loginRequest = (loginPayload: LoginFormProps) => {
//   return axios
//     .post(apiBaseUrl + '/api/v1/users/login/', loginPayload)
//     .then(value => value.data);
// };

class LoginRequest {
  static loginRequest = (loginPayload: LoginFormProps): Promise<any> => {
    console.log('loginPayload', loginPayload);
    return axios
      .post(apiBaseUrl + '/api/v1/users/login/', loginPayload)
      .then(value => value.data);
  };
}

export default LoginRequest;
