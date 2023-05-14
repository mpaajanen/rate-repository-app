import { useMutation, useApolloClient } from "@apollo/client";
import { SIGNIN } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

//testi
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  // const authStorage = useAuthStorage();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGNIN);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password }
    console.log({credentials})
    
    const payload = await mutate({ variables: { credentials } });
    console.log({payload})
    const { data } = payload;

    console.log({data})
    console.log(data.authenticate.accessToken)
    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return payload
  };

  return [signIn, result];
};

export default useSignIn;