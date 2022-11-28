import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { CloseButton, Icon } from './Contact.styles';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const { name, phone, id } = contact;
  return (
    <>
      <Icon />
      {name}: {phone}
      <CloseButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <AiOutlineClose size={18} />
      </CloseButton>
    </>
  );
}
