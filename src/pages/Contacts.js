import img from '../../src/img/tell.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import {
  selectContacts,
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
//chakra
import { Box, Heading, Text } from '@chakra-ui/react';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);
  const error = useSelector(selectErrorContacts);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} position={'relative'}>
        <ContactForm />

        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 ? (
          <Box
            backgroundColor={img}
            shadow={'dark-lg'}
            p={'10'}
            m={'auto'}
            mt={5}
            w={330}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            borderRadius={20}
          >
            <Heading p={0} m={0}>
              Your contacts
            </Heading>
            <Filter />
            <ContactList />
          </Box>
        ) : (
          <Text fontSize="50px" color="blue">
            'You have no contacts'
          </Text>
        )}
      </Box>
    </>
  );
}
