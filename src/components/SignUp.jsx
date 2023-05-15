import { View, Pressable, StyleSheet } from "react-native";
import Text from './Text'
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from 'yup';
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  input: {
    border: 'solid',
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  submit: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    color: '#ffffff',
    backgroundColor: theme.colors.primary
  }
})

const SignUp = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name='username' placeholder='Username' />
      <FormikTextInput style={styles.input} name='password' placeholder='Password' secureTextEntry={true} />
      <FormikTextInput style={styles.input} name='passwordConfirm' placeholder='Confirm password' secureTextEntry={true} />
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text tag>Sign up</Text>
      </Pressable>
    </View>
  )
};

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required.')
    .min(1, 'Username must be 1 to 30 characters long.')
    .max(30, 'Username must be 1 to 30 characters long.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(5, 'Password must have 5 to 50 characters.')
    .max(50, 'Password must have 5 to 50 characters.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match.")
    .required('Password confirm is required.')
});

export const SignupFormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUp onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignupForm = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    // console.log({values})
    const { username, password } = values;

    try {
      await signUp({ username, password });
      navigate("/")
      // console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  return <SignupFormContainer onSubmit={onSubmit} />
};

export default SignupForm;