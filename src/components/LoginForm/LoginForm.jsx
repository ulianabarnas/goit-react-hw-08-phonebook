import FormError from 'components/FormError/FormError';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Label, StyledButton, StyledForm } from 'shared/FormikForm/FormikForm.styles';
import * as yup from 'yup';


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
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Please fill in the password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
          Email
          <Input type="email" name="email" />
        </Label>
        <FormError name="email" />

        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <FormError name="password" />

        <StyledButton type="submit">Log In</StyledButton>
      </StyledForm>
    </Formik>
  );
};
