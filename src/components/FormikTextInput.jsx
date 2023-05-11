import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: 'red'
  },
  errorBorder: {
    borderColor: 'red'
  }
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  console.log("FTI, hello")

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={[style, {borderColor: showError ? 'red' : null}]}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;