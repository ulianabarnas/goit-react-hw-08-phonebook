import FormError from 'components/FormError/FormError';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import * as yup from 'yup';
import { Form, Label } from './LoginForm.styles';

const initialValues = {
  email: '',
  password: '',
};

// const validationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .matches(
//       nameRegExp,
//       'email may contain only letters, apostrophe, dash and spaces.'
//     )
//     .required('Please fill in the name'),

//   password: yup
//     .string()
//     .matches(
//       numberRegExp,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required('Please fill in the number'),
// });

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label>
          Email
          <Field type="email" name="email" />
        </Label>
        <FormError name="email" />

        <Label>
          Password
          <Field type="password" name="password" />
        </Label>
        <FormError name="password" />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
