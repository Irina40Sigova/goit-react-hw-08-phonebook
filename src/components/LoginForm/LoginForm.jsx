import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Box, Button, Flex, FormLabel, Input, VStack } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex bg="blue.100" align="center" justify="center" h="100vh">
      <Box
        bg="blue.200"
        p={8}
        rounded="md"
        w={'20%'}
        position={'fixed'}
        top={250}
      >
        <Formik onSubmit={handleSubmit}>
          <form>
            <VStack spacing={4} align="flex-start">
              <FormLabel fontSize="30px">Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="myemail@mail.com"
                bg="blue.100"
                fontSize="20px"
              />

              <FormLabel htmlFor="password" fontSize="30px">
                Password
              </FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                bg="blue.100"
                fontSize="20px"
              />
              <Button
                type="submit"
                colorScheme="yellow"
                fontSize="20px"
                width="100%"
              >
                Login
              </Button>
            </VStack>
          </form>
        </Formik>
      </Box>
    </Flex>
  );
};
