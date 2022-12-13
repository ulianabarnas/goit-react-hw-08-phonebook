import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';

import FormError from 'components/FormError/FormError';
import { Input, Label, StyledButton, StyledForm } from 'shared/FormikForm/FormikForm.styles';
import { Error } from 'shared/Message/Message.styles';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();
  
  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
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

        <StyledButton type="submit">Log In</StyledButton>
      </StyledForm>
    </Formik>
  );
};