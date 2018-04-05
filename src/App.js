import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
