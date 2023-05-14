import { View, Pressable, StyleSheet } from "react-native";
import Text from './Text'
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

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

const SigninForm = () => {
  const [signIn] = useSignIn();
  const initialValues = {
    username: '',
    password: ''
  };
  
  const onSubmit = async (values) => {
    console.log({values})
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
    // .min(3, "Length of Username must be greater or equal to 3"),
    .required('Username is required'),
    password: yup
      .string()
      // .min(3, "Length of Password must be greater or equal to 3")
      .required('Password is required')
  });
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SigninForm;