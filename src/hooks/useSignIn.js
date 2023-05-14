import { useMutation } from "@apollo/client";
import { SIGNIN } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });

    console.log(data)

    return data
  };

  return [signIn, result];
};

export default useSignIn;