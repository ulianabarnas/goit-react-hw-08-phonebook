import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import Contact from 'Contact/Contact';
import { Item, List } from './ContactList.styles';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} />
        </Item>
      ))}
    </List>
  );
}
