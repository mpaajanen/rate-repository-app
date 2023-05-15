import { View, Pressable, StyleSheet } from "react-native";
import Text from './Text'
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from 'yup';
import useReview from "../hooks/useReview";
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

const Review = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name='repositoryUsername' placeholder="Repository owner's username" />
      <FormikTextInput style={styles.input} name='repositoryName' placeholder="Repository's name" />
      <FormikTextInput style={styles.input} name='rating' placeholder="Rating 0 to 100" />
      <FormikTextInput style={styles.input} name='reviewText' placeholder="Review text" />
      <Pressable style={styles.submit} onPress={onSubmit}>
        <Text tag>Send review</Text>
      </Pressable>
    </View>
  )
};

const initialValues = {
  repositoryUsername: '',
  repositoryName: '',
  rating: undefined,
  reviewText: ''
};

const validationSchema = yup.object().shape({
  repositoryUsername: yup
    .string()
    .required("Repository owner's username is required."),
  repositoryName: yup
    .string()
    .required("Repository's name is required."),
  rating: yup
    .number()
    .required("Rating is required.")
    .min(0, "Rating must be between 0 and 100.")
    .max(100, "Rating must be between 0 and 100.")
});

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <Review onSubmit={handleSubmit} />}
    </Formik>
  );
}

const ReviewForm = () => {
  const [review] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values)
    const { repositoryUsername, repositoryName, rating, reviewText } = values;

    try {
      const { data } = await review({ repositoryUsername, repositoryName, rating: Number(rating), reviewText });
      console.log(data)
      navigate(`/repository/${data.createReview.repositoryId}`)
    }
    catch (error) {
      console.log(error);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />
};

export default ReviewForm;