import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';

import FormError from 'components/FormError/FormError';

import { Error } from 'components/UI/Message/Message.styles';
import {
  Input,
  Label,
  StyledButton,
  StyledForm,
} from 'components/UI/FormikForm/FormikForm.styles';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .required('Please fill in the name'),

  email: yup
    .string()
    .email('Email must be a valid')
    .required('Please fill in the email'),

  password: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('Please fill in the password'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { error } = useAuth();

  const handleSubmit = values => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <FormError name="name" />

        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <FormError name="email" />

        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <FormError name="password" />

        {error && <Error>{error}</Error>}

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
}
