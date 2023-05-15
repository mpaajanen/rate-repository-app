import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORY_BY_ID } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const RepositoryPage = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      id
    }
  })
  
  if (loading) {
    return null
  }

  const item = data?.repository

  return <RepositoryItem item={item} />
}

export default RepositoryPage