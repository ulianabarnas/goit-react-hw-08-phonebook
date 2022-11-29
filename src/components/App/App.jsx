import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

import Box from 'components/Box/Box';
import Loader from 'shared/Loader/Loader';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Error, Message, Subtitle, Title } from './App.styles';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="section"
      maxWidth="400px"
      width="80vw"
      textAlign="center"
      mx="auto"
      mt={5}
      pt={5}
      bg="white"
      borderRadius="normal"
      boxShadow="normal"
      overflow="hidden"
    >
      <Box px={5}>
        <Title>Phonebook</Title>
        <ContactForm />
      </Box>

      <Box mt={5} py={5} px={5} bg="primary">
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && <Loader />}
        {error && <Error>Something goes wrong. {error}.</Error>}
        {contacts.length > 0 || isLoading ? (
          <ContactList />
        ) : (
          <Message>This name was not found</Message>
        )}
      </Box>
    </Box>
  );
}
