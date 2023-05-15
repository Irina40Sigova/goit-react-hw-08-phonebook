import { useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectErrorUser, selectIsLoadingUser } from 'redux/auth/selectors';

export default function Register() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <div>
      <title>Registration</title>
      <RegisterForm />
      {isLoading && !error && <b>Loading...</b>}
    </div>
  );
}
