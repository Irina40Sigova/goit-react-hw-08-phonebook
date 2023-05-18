import { Text } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectErrorUser, selectIsLoadingUser } from 'redux/auth/selectors';

export default function Login() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <>
      <Text fontSize="6xl" color="blue" as="i" textAlign={['left', 'center']}>
        Please log in to your phone book!!!
      </Text>
      <LoginForm />
      {isLoading && !error && <b>Loading...</b>}
    </>
  );
}
