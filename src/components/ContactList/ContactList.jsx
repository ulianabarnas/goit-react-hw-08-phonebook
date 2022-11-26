import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactButton, Icon, Item, List } from "./ContactList.styles";

export default function ContactList() {
    // const contacts = useSelector(selectContacts);
    // console.log(contacts);
//   const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = getFilteredContacts();

  const elements = filteredContacts.map(({ name, phone, id }) => {
    return (
      <Item key={id}><Icon />{name}: {phone}
        <ContactButton
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ContactButton>
      </Item>
    )
  });
  
  return (
    <List>
      {elements}
    </List>
  );
};