import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';


const client = new ApolloClient({ uri: 'http://192.168.43.208:3002/graphql' });

const GET_TELEVISION = gql`
  query {
    Televisions {
      title
      id
    }
  }
`

const Application = () => (
  <Query query={GET_TELEVISION}>
    {({ loading, error, data }) => {
      if (loading) return <View><Text>Loading...</Text></View>;
      if (error) {
        console.warn(error)
        return <View><Text>Error :( </Text></View>;
      }

      return (
        <View><Text>{JSON.stringify(data)}</Text></View>
      )
    }}
  </Query>
)

class GetTelevision extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Application />
      </ApolloProvider>
    );
  }
}

export default GetTelevision