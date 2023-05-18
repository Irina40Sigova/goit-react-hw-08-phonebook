import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense, useEffect } from 'react';
import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { selectErrorContacts } from 'redux/contacts/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const { error: useError } = useAuth();
  const contactsError = useSelector(selectErrorContacts);

  useEffect(() => {
    if (!useError && !contactsError) return;
    toast.error(useError ?? contactsError);
  }, [useError, contactsError]);

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
