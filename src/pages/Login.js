import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectErrorUser, selectIsLoadingUser } from 'redux/auth/selectors';

export default function Login() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <div>
      <title>Login</title>
      <LoginForm />
      {isLoading && !error && <b>Loading...</b>}
    </div>
  );
}
