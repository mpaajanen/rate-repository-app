import { View, Pressable, StyleSheet } from "react-native";
import Text from './Text'
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
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

const SignIn = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name='username' placeholder='Username' />
      <FormikTextInput style={styles.input} name='password' placeholder='Password' secureTextEntry={true} />
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text tag>Sign in</Text>
      </Pressable>
    </View>
  )
};

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

export const SigninFormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SigninForm = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    // console.log({values})
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate("/")
      // console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  return <SigninFormContainer onSubmit={onSubmit} />
};

export default SigninForm;