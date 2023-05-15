import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your Phone book</title>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? (
        <div>
          <Filter />
        </div>
      ) : (
        'You have no contacts'
      )}
    </>
  );
}
