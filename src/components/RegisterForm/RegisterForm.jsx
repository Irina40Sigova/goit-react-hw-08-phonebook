import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ArrowRightIcon } from '@chakra-ui/icons';
import * as Yup from 'yup';
//chakra
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().min(7, 'Too Short!').required('Password is required'),
  rememberMe: Yup.bool().oneOf([true], 'Field must be checked'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData, actions) => {
    // alert(JSON.stringify(formData));
    dispatch(register({ ...formData }));
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
            name: '',
            email: '',
            password: '',
            rememberMe: false,
          }}
          onSubmit={onSubmit}
          validationSchema={Schema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name" fontSize="30px">
                    Username
                  </FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    fontSize="20px"
                    bg="blue.100"
                    w={'90%'}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email" fontSize="30px">
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    variant="filled"
                    fontSize="20px"
                    bg="blue.100"
                    w={'90%'}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
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
                    variant="filled"
                    fontSize="20px"
                    bg="blue.100"
                    w={'90%'}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.rememberMe && touched.rememberMe}
                >
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  <FormErrorMessage>{errors.rememberMe}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="yellow"
                  fontSize="20px"
                  rightIcon={<ArrowRightIcon />}
                  width="full"
                >
                  Register
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
