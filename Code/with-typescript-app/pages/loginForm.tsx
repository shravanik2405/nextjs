import { useForm } from 'react-hook-form';
import { Container, Form, Button } from 'react-bootstrap';
import Router, { useRouter } from 'next/router';
import { loginAction } from '../redux/action';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import * as Yup from 'yup';
import { SessionState } from '../redux/reducers/session';
import { USER_COOKIE_KEY } from '../redux/constants';
import { useEffect } from 'react';

export interface LoginFormProps {
  email: string;
  password: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm: React.FunctionComponent = ({ loginAction }: any) => {
  const user = useSelector((state: SessionState) => state.user);
  const [cookies, setCookie] = useCookies([USER_COOKIE_KEY]);
  const dispatch = useDispatch();
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
    validationSchema: validationSchema
  });

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user]);

  const onSubmit = async (loginFormPayload: LoginFormProps) => {
    console.log('data', user);
    dispatch(loginAction(loginFormPayload, setCookie));
  };

  return (
    <Container className="mt-5 login-container shadow-lg mx-auto p-lg-5 p-md-4 p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
              ref={register}
            />
            <div style={{ color: 'red' }} className="error">
              {errors && errors.email && errors.email.message}
            </div>
          </Form.Group>
        </div>
        <div className="field">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter password"
              name="password"
              id="password"
              ref={register}
            />
            <div style={{ color: 'red' }} className="error">
              {errors && errors.password && errors.password.message}
            </div>
          </Form.Group>
        </div>
        <div>
          <Button type="submit" className="float-right">
            Submit
          </Button>
        </div>
      </form>
      <style>
        {`.login-container{
   max-width: 520px;
  width: 100%;
        }`}
      </style>
    </Container>
  );
};
const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps, { loginAction })(LoginForm);
