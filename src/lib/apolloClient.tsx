// 'use client'
import { ApolloClient, InMemoryCache } from "@apollo/client";


const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
    mutate: {
        errorPolicy: 'all',
    },
};

//https://www.apollographql.com/docs/react/api/core/ApolloClient
const apolloClient = new ApolloClient({
    uri: "https://cm5y5tem.tatsuma.co/56f1640ab297138e177caa3c684c1c6e",
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'all',
        },
    }
    // queryDeduplication: false,
    // ssrForceFetchDelay: 1000,
    // ssrMode: true

})

export default apolloClient;

