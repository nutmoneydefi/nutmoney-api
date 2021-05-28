import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://q.hg.network/subgraphs/name/mdex-heco-blocks",
  }),
  cache: new InMemoryCache(),
});