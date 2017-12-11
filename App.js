import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';


class App extends Component {
  //run this once
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyA06rYYuVGBySX9wwSb-nCXASexelmZxgI',
        authDomain: 'manager-c7b2a.firebaseapp.com',
        databaseURL: 'https://manager-c7b2a.firebaseio.com',
        projectId: 'manager-c7b2a',
        storageBucket: 'manager-c7b2a.appspot.com',
        messagingSenderId: '122608804353'
      };
      firebase.initializeApp(config);
    }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;