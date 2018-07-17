import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm';
class App extends Component {

  componentWillMount() {
    const firebase = require('firebase');
    const config = {
      apiKey: "AIzaSyBuq5hd4C6HkPwbhnwhDK_DD5pGhuzkQYw",
      authDomain: "manager-ab2c5.firebaseapp.com",
      databaseURL: "https://manager-ab2c5.firebaseio.com",
      projectId: "manager-ab2c5",
      storageBucket: "manager-ab2c5.appspot.com",
      messagingSenderId: "548855582920"
    };
    firebase.initializeApp(config);
  }


  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
