import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Box from 'components/Box/Box';
import { Subtitle, Title } from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'shared/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
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
      overflow="hidden">
      <Box
        px={5}
      >
        <Title>Phonebook</Title>
        <ContactForm />
      </Box>
        
      <Box
        mt={5}
        py={5}
        px={5}
        bg="primary"
      >
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && !error && <Loader/>}
        <ContactList />
      </Box>
    </Box>
  );
};
