import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import {
  selectContacts,
  selectErrorContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';

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
