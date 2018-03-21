import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import GetTelevision from './src/components/GetTelevision'

const SimpleApp = StackNavigator(
  {
    GetTelevisionScreen: {
      screen: GetTelevision
    },
  },
  {
    initialRouteName: 'GetTelevisionScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#304FFE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);


class App extends React.Component {
  render() {
    return (
      <SimpleApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
