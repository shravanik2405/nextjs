import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { SessionState } from '../redux/reducers/session';
import Link from 'next/link';
import { logoutAction } from '../redux/action';
import { useCookies } from 'react-cookie';
import { USER_COOKIE_KEY } from '../constants';

const Profile: React.FunctionComponent = () => {
  const user = useSelector((state: SessionState) => state.user);
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies([USER_COOKIE_KEY]);

  const logoutHandler = () => {
    console.log('logout clicked');
    dispatch(logoutAction(removeCookie));
  };

  return (
    <Container className="mt-5 login-container mx-auto p-lg-5 p-md-4 p-3">
      <h2 className="text-bold">Hi, </h2>
      <h1>{user ? user.first_name + ' ' + user.last_name : ''}</h1>
      <Link href="/loginForm">
        <a onClick={logoutHandler}>Logout</a>
      </Link>
    </Container>
  );
};

export default Profile;
