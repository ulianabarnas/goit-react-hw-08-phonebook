import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import * as yup from 'yup';
import FormError from 'components/FormError/FormError';
import { Input, Label, StyledButton, StyledForm } from 'shared/FormikForm/FormikForm.styles';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true),

  email: yup
    .string()
    .email('Email must be a valid')
    .required('Please fill in the email'),

  password: yup
    .string()
    .trim('The contact name cannot include leading and trailing spaces')
    .strict(true)
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Please fill in the password'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm();
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

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
}
