import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { object, string } from 'yup';
import { Formik } from 'formik';
import { Box, Button, Flex, FormLabel, Input, VStack } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Schema = object({
  name: string()
    .required('Name is required')
    .min(2, 'Too Short!')
    .max(25, 'Too Long!'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, actions) => {
    dispatch(register({ ...formData }));
    actions.resetForm();
  };

  return (
    <Flex bg="blue.100" align="center" justify="center" h="100vh">
      <Box
        p={16}
        rounded="md"
        bg="blue.400"
        position={'fixed'}
        top={250}
        w={'20%'}
      >
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={Schema}
        >
          <VStack align="flex-start" spacing={5}>
            <FormLabel htmlFor="name" fontSize="30px">
              Username
            </FormLabel>
            <Input
              name="name"
              type="name"
              placeholder="Username"
              bg="blue.100"
              fontSize="20px"
            />

            <FormLabel htmlFor="email" fontSize="30px">
              Email Address
            </FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
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
              colorScheme="yellow"
              width="100%"
              height="50px"
              fontSize="20px"
              rightIcon={<ArrowRightIcon />}
              type="submit"
            >
              Register
            </Button>
          </VStack>
        </Formik>
      </Box>
    </Flex>
  );
};
