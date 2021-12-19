/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, TextField } from '../../components';
import useAuth from '../../hooks/useAuth';

const signUpInputs = ['email', 'name', 'password'];
const signInInputs = ['email', 'password'];
const forgetInputs = ['email'];

const LoginEmail = ({ isSignUp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn } = useAuth();
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    setInputs(isSignUp ? signUpInputs : signInInputs);
    console.log(inputs);
  }, [isSignUp]);

  useEffect(
    () => () => {
      setIsLoading(false);
    },
    []
  );
  const nameValidate = isSignUp && {
    name: Yup.string()
      .min(5, 'name must be longer than 6 character.')
      .required('Name is required.'),
  };
  const { handleChange, handleBlur, handleSubmit, values, errors, setSubmitting } = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('enter valid email').required('email is required.'),
      ...nameValidate,
      password: Yup.string()
        .min(6, 'password must be longer than 6 character.')
        .required('password is required.'),
    }),

    onSubmit: async ({ email, name, password }) => {
      console.log('fuck');
      setIsLoading(true);
      if (isSignUp) {
        await signUp(email, name, password);
      } else {
        await signIn(email, password);
      }
      setIsLoading(false);
      setSubmitting(false);
    },
  });
  return (
    <div className="login-section login-email">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <TextField
            key={input}
            handleChange={handleChange}
            handleValue={values[input]}
            handleBlur={handleBlur}
            handleError={errors[input]}
            look="login"
            name={input}
            type={input}
          />
        ))}
        <Button look="sign-submit" disabled={isLoading} submit>
          {isSignUp ? 'Create Account' : 'Login'}
        </Button>
      </form>
    </div>
  );
};
LoginEmail.propTypes = {
  isSignUp: PropsTypes.bool.isRequired,
};

export default LoginEmail;
