import { View, Pressable, StyleSheet } from "react-native";
import Text from './Text'
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";

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
      <FormikTextInput style={styles.input} name='password' placeholder='Password' />
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text tag>Sign in</Text>
      </Pressable>
    </View>
  )
};

const SigninForm = () => {
  const initialValues = {
    username: '',
    password: ''
  };
  
  const onSubmit = (values) => {
    console.log({values})
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SigninForm;