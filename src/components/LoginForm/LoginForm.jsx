import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Field, Formik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData, actions) => {
    alert(JSON.stringify(formData));
    dispatch(logIn({ ...formData }));
    actions.resetForm();
  };

  // const onSubmit = e => {
  //   const form = e.currentTarget;
  //   alert(
  //     JSON.stringify({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box
        bg="blue.200"
        p={8}
        rounded="md"
        w={'20%'}
        position={'fixed'}
        top={250}
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel fontSize="30px">Email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="myemail@mail.com"
                    bg="blue.100"
                    fontSize="20px"
                    w={'90%'}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password" fontSize="30px">
                    Password
                  </FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    bg="blue.100"
                    fontSize="20px"
                    w={'90%'}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
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
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
