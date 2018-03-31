import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

//root component
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCLbFFlWMIsMBv40dJqTEpyAKd06SZokGY',
      authDomain: 'manager-fc8ce.firebaseapp.com',
      databaseURL: 'https://manager-fc8ce.firebaseio.com',
      projectId: 'manager-fc8ce',
      storageBucket: 'manager-fc8ce.appspot.com',
      messagingSenderId: '537353884123'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
