import { Field, Formik } from 'formik';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
//chakra
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Flex,
  VStack,
} from '@chakra-ui/react';

const Schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required(),
  number: Yup.string().min(6, 'Too Short!').max(15, 'Too Long!').required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (formData, actions) => {
    const sameName = contacts.find(
      el => el.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (sameName) return alert(formData.name + ' is already in contacts.');

    dispatch(addContact({ ...formData }));
    actions.resetForm();
  };

  return (
    <Flex align="center" justify="center" h="40vh">
      <Box
        bg="blue.300"
        p={6}
        rounded="md"
        w={'15%'}
        position={'fixed'}
        top={150}
      >
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={onSubmit}
          validationSchema={Schema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={10} w={'90%'}>
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel htmlFor="name" fontSize="30px" fontWeight={700}>
                    Name
                  </FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    fontSize="15px"
                    bg="blue.100"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.number && touched.number}>
                  <FormLabel htmlFor="name" fontSize="30px" fontWeight={700}>
                    Number
                  </FormLabel>
                  <Field
                    as={Input}
                    variant="filled"
                    fontSize="15px"
                    bg="blue.100"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <Button
                  fontSize="20px"
                  colorScheme="yellow"
                  width="full"
                  padding={4}
                  type="submit"
                >
                  Add contact
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
