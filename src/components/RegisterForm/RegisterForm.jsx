import { Formik, Field } from 'formik';
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
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ArrowRightIcon } from '@chakra-ui/icons';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Flex bg="blue.100" align="center" justify="center" h="100vh">
      <Box
        bg="blue.300"
        p={6}
        rounded="md"
        w={'20%'}
        position={'fixed'}
        top={150}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            rememberMe: false,
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({
            handleSubmit = (formData, actions) => {
              dispatch(register({ ...formData }));
              actions.resetForm();
            },
            errors,
            touched,
          }) => (
            <form
              onSubmit={
                (handleSubmit = (formData, actions) => {
                  dispatch(register({ ...formData }));
                  actions.resetForm();
                })
              }
            >
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name" fontSize="30px">
                    Username
                  </FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                    fontSize="20px"
                    bg="blue.100"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" fontSize="30px">
                    Email Address
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    fontSize="20px"
                    bg="blue.100"
                  />
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
                    validate={value => {
                      let error;

                      if (value.length < 5) {
                        error = 'Password must contain at least 6 characters';
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="blue.100"
                >
                  Remember me?
                </Field>
                <Button
                  type="submit"
                  colorScheme="yellow"
                  fontSize="20px"
                  rightIcon={<ArrowRightIcon />}
                  width="full"
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

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { object, string } from 'yup';
// import { Formik } from 'formik';
// import { Box, Button, Flex, FormLabel, Input, VStack } from '@chakra-ui/react';
// import { ArrowRightIcon } from '@chakra-ui/icons';

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
// };

// const Schema = object({
//   name: string()
//     .required('Name is required')
//     .min(2, 'Too Short!')
//     .max(25, 'Too Long!'),
//   email: string().email('Invalid email').required('Email is required'),
//   password: string().required('Password is required'),
// });

// export const RegisterForm = () => {
// const dispatch = useDispatch();

// const handleSubmit = (formData, actions) => {
//   dispatch(register({ ...formData }));
//   actions.resetForm();
// };

//   return (
//     <Flex bg="blue.100" align="center" justify="center" h="100vh">
//       <Box
//         p={16}
//         rounded="md"
//         bg="blue.400"
//         position={'fixed'}
//         top={250}
//         w={'20%'}
//       >
//         <Formik
//           initialValues={initialValues}
//           validationSchema={Schema}
//           onSubmit={handleSubmit}
//         >
//           <VStack align="flex-start" spacing={5}>
//             <FormLabel htmlFor="name" fontSize="30px">
//               Username
//             </FormLabel>
//             <Input
//               name="name"
//               type="name"
//               placeholder="Username"
//               bg="blue.100"
//               fontSize="20px"
//             />

//             <FormLabel htmlFor="email" fontSize="30px">
//               Email Address
//             </FormLabel>
//             <Input
//               name="email"
//               type="email"
//               placeholder="Email Address"
//               bg="blue.100"
//               fontSize="20px"
//             />
//             <FormLabel htmlFor="password" fontSize="30px">
//               Password
//             </FormLabel>
//             <Input
//               name="password"
//               type="password"
//               placeholder="Password"
//               bg="blue.100"
//               fontSize="20px"
//             />
//             <Button
//               colorScheme="yellow"
//               width="100%"
//               height="50px"
//               fontSize="20px"
//               rightIcon={<ArrowRightIcon />}
//               type="submit"
//             >
//               Register
//             </Button>
//           </VStack>
//         </Formik>
//       </Box>
//     </Flex>
//   );
// };
