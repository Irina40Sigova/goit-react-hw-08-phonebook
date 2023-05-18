import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
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

const Schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().min(7, 'Too Short!').required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData, actions) => {
    // alert(JSON.stringify(formData));
    dispatch(logIn({ ...formData }));
    actions.resetForm();
  };

  return (
    <Flex align="center" justify="center" h="50vh">
      <Box
        boxShadow="dark-lg"
        p="16"
        rounded="md"
        bg="white"
        pos="absolute"
        margin="0"
      >
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          validationSchema={Schema}
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
