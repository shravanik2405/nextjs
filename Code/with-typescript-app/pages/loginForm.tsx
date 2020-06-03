import { useForm } from 'react-hook-form';
import { Container, Form, Button } from 'react-bootstrap';
import { loginRequest } from '../http/login';
import { saveUserAction } from '../redux/action';
import { connect } from 'react-redux';
import * as Yup from 'yup';

export interface LoginFormProps {
  email: string;
  password: string;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const LoginForm: React.FunctionComponent = ({ user, saveUserAction }: any) => {
  const { register, handleSubmit, errors } = useForm<LoginFormProps>({
    mode: 'onChange',
    validationSchema: validationSchema
  });
  const onSubmit = async (loginFormPayload: LoginFormProps) => {
    const user = await loginRequest(loginFormPayload);
    console.log('data', user);
    saveUserAction(user);
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

export default connect(mapStateToProps, { saveUserAction })(LoginForm);
