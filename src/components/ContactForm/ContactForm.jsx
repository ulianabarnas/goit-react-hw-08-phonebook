import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { Button, Input, Label } from './ContactForm.styles';
import FormError from 'components/FormError/FormError';

const initialValues = {
  name: '',
  phone: '',
};

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Please fill in the name'),

  phone: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please fill in the number'),
});

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px',
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    function isDublicateName(values) {
      return contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );
    }

    if (isDublicateName(values)) {
      return Notify.info(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
        <FormError name="name" />

        <Label>
          Number
          <Input type="tel" name="phone" />
        </Label>
        <FormError name="phone" />

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}
